FROM ruby:3.0-slim AS builder

# Install system dependencies
RUN apt-get update -qq && \
    apt-get install -y curl build-essential gnupg software-properties-common && \
    curl -sL https://deb.nodesource.com/gpgkey/nodesource.gpg.key | apt-key add - && \
    add-apt-repository "deb https://deb.nodesource.com/node_16.x $(lsb_release -sc) main" && \
    apt-get update -qq && \
    apt-get install -y nodejs && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update -qq && \
    apt-get install -y yarn postgresql libpq-dev && \
    apt-get autoremove -y && apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /myapp

# Set environment variables
ENV RAILS_ENV=production
ENV NODE_ENV=production
ENV BUNDLE_WITHOUT="development:test"

# Install specific bundler version
RUN gem uninstall bundler -aIx && \
    gem install bundler:2.2.33

# Copy dependency files
COPY Gemfile* ./
COPY package.json yarn.lock ./

# Install production dependencies only
RUN bundle config set --local without 'development test' && \
    bundle install --jobs 4 --retry 3 && \
    yarn install --production

# Copy application code
COPY . .

# Precompile assets
RUN bundle exec rails assets:precompile

# Create production-optimized image
FROM ruby:3.0-slim

# Install production-only dependencies
RUN apt-get update -qq && \
    apt-get install -y postgresql libpq-dev && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /myapp

# Copy built artifacts from builder stage
COPY --from=builder /usr/local/bundle /usr/local/bundle
COPY --from=builder /myapp /myapp

# Set production environment variables
ENV RAILS_ENV=production
ENV RAILS_SERVE_STATIC_FILES=true
ENV RAILS_LOG_TO_STDOUT=true

# Expose production port
EXPOSE 3000

# Start production server
CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]