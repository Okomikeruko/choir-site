FROM whittakertech/choir-base:latest

# Install system dependencies, Node.js v16.x, and Yarn
RUN apt-get update -qq && \
    apt-get install -y --no-install-recommends \
        libv8-dev && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Set Rails to run in production
# Use existing SECRET_KEY_BASE if available, otherwise generate a random one
ENV RAILS_ENV=production \
    NODE_ENV=production \
    BUNDLE_WITHOUT="development test"

# Install gems
COPY Gemfile Gemfile.lock ./
RUN bundle config set --local without $BUNDLE_WITHOUT && \
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