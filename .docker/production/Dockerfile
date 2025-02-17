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

# Copy all files at once
COPY . /myapp/

# Install dependencies
RUN bundle config set --local without 'development test' && \
    bundle install --jobs 4 --retry 3 && \
    yarn install --production --frozen-lockfile

# Final stage
FROM ruby:3.0-slim

# Install production-only dependencies
RUN apt-get update -qq && \
    apt-get install -y --no-install-recommends \
    libpq-dev && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

WORKDIR /myapp

# Copy built artifacts and code
COPY --from=builder /usr/local/bundle /usr/local/bundle
COPY --from=builder /myapp /myapp

# Configure Rails for production
ENV RAILS_ENV=production \
    RAILS_SERVE_STATIC_FILES=true \
    RAILS_LOG_TO_STDOUT=true

CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]