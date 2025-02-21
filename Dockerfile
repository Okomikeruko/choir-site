FROM ruby:3.0-slim

# Install system dependencies
RUN apt-get update -qq && \
    apt-get install -y --no-install-recommends \
        curl \
        build-essential \
        gnupg \
        software-properties-common \
        postgresql-client \
        git \
        nodejs && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update -qq && \
    apt-get install -y --no-install-recommends \
        yarn \
        libpq-dev && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Set Rails to run in production
ENV RAILS_ENV=production \
    NODE_ENV=production \
    BUNDLE_WITHOUT="development:test" \
    BUNDLE_DEPLOYMENT="1"

# Install gems
COPY Gemfile Gemfile.lock ./
RUN bundle config set --local without 'development test' && \
    bundle install --jobs 4 --retry 3

# Install yarn packages
COPY package.json yarn.lock ./
RUN yarn install --production --frozen-lockfile

# Copy application code
COPY . .

# Precompile assets with proper environment variables
RUN SECRET_KEY_BASE=dummy \
    RAILS_ENV=production \
    bundle exec rake assets:precompile

# Start the server
CMD ["bundle", "exec", "puma", "-C", "config/puma.rb"]