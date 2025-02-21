FROM ruby:3.0-slim

# Install system dependencies and Node.js 16.x
RUN apt-get update -qq && \
    apt-get install -y --no-install-recommends \
        curl \
        build-essential \
        gnupg \
        software-properties-common \
        postgresql-client \
        git \
        ca-certificates && \
    # Add NodeSource repository for Node.js 16.x
    curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
    # Add Yarn repository
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update -qq && \
    apt-get install -y --no-install-recommends \
        nodejs \
        yarn \
        libpq-dev && \
    # Install mini_racer for ExecJS
    apt-get install -y --no-install-recommends \
        libv8-dev && \
    # Keep curl installed (don't remove it)
    rm -rf /var/lib/apt/lists/*

# Verify versions
RUN node --version && \
    yarn --version

# Set working directory
WORKDIR /app

# Set Rails to run in production
ENV RAILS_ENV=production \
    NODE_ENV=production \
    BUNDLE_WITHOUT="development"

# Install gems
COPY Gemfile Gemfile.lock ./
RUN bundle config set --local without 'development test' && \
    bundle install --jobs 4 --retry 3

# Install yarn packages
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy application code
COPY . .

# Precompile assets
RUN SECRET_KEY_BASE=dummy \
    RAILS_ENV=production \
    bundle exec rake assets:precompile

# Start the server
CMD ["bundle", "exec", "puma", "-C", "config/puma.rb"]