FROM ruby:3.0-slim

# Install system dependencies, Node.js v16.x, and Yarn
RUN apt-get update -qq && \
    apt-get install -y --no-install-recommends \
        curl build-essential gnupg software-properties-common \
        postgresql-client git ca-certificates libpq-dev libv8-dev && \
    # Install Node.js v16.x from NodeSource
    curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs && \
    # Install Yarn globally
    npm install -g yarn && \
    # Verify versions
    node --version && yarn --version && \
    # Cleanup
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Set Rails to run in production
# Use existing SECRET_KEY_BASE if available, otherwise generate a random one
ENV RAILS_ENV=production \
    NODE_ENV=production \
    BUNDLE_WITHOUT="development test"

# Install gems
COPY Gemfile Gemfile.lock ./
RUN bundle config set --local without 'development test' && \
    bundle install --jobs 4 --retry 3

# Install Yarn packages
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Precompile assets
RUN SECRET_KEY_BASE=dummy bundle exec rake assets:precompile || \
    (echo "Asset compilation failed - check JavaScript syntax" && \
     NODE_ENV=production RAILS_ENV=production bundle exec rake assets:clobber && \
     SECRET_KEY_BASE=dummy bundle exec rake assets:precompile --trace)

# Expose the port Heroku sets
EXPOSE $PORT

# Start the server
CMD ["bundle", "exec", "puma", "-C", "config/puma.rb"]