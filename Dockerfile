FROM ruby:3.0-slim

# Install system dependencies
RUN apt-get update -qq && \
    apt-get install -y --no-install-recommends \
        curl build-essential gnupg software-properties-common \
        postgresql-client git ca-certificates libpq-dev libv8-dev \
        nodejs npm && \
    # Install Yarn
    npm install -g yarn && \
    # Verify versions
    node --version && \
    yarn --version && \
    # Cleanup
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

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
RUN SECRET_KEY_BASE=dummy bundle exec rake assets:precompile

# Start the server
CMD ["bundle", "exec", "puma", "-C", "config/puma.rb"]