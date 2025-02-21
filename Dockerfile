# Base build stage
FROM ruby:3.0-slim AS builder

# Install system dependencies
RUN apt-get update -qq && \
    apt-get install -y --no-install-recommends \
    build-essential \
    curl \
    libpq-dev \
    node-gyp \
    pkg-config \
    python-is-python3 && \
    # Install Node.js
    curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs && \
    # Install Yarn
    npm install -g yarn && \
    # Clean up
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

WORKDIR /myapp

# Set production environment
ENV RAILS_ENV=production \
    NODE_ENV=production \
    BUNDLE_WITHOUT="development:test"

# Install specific bundler version
RUN gem install bundler:2.2.33

# Copy all files
COPY . .

# Install dependencies
RUN bundle config set --local without 'development test' && \
    bundle install --jobs 4 --retry 3 && \
    yarn install --production --frozen-lockfile

# Final stage
FROM ruby:3.0-slim

# Install production dependencies
RUN apt-get update -qq && \
    apt-get install -y --no-install-recommends \
    curl \
    gnupg2 \
    libpq-dev && \
    # Install Node.js
    curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs && \
    # Clean up
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

WORKDIR /myapp

# Copy built artifacts and code
COPY --from=builder /usr/local/bundle /usr/local/bundle
COPY --from=builder /myapp /myapp
COPY --from=builder /usr/local/share/.config/yarn /usr/local/share/.config/yarn
COPY --from=builder /usr/local/lib/node_modules /usr/local/lib/node_modules
COPY --from=builder /usr/local/bin/yarn /usr/local/bin/yarn
COPY --from=builder /usr/local/bin/yarnpkg /usr/local/bin/yarnpkg

# Configure Rails for production
ENV RAILS_ENV=production \
    RAILS_SERVE_STATIC_FILES=true \
    RAILS_LOG_TO_STDOUT=true \
    NODE_ENV=production

CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]
