FROM whittakertech/choir-base:latest

# Set Rails to run in production
ENV RAILS_ENV=production \
    NODE_ENV=production \
    BUNDLE_WITHOUT="development test"

# Install gems
COPY Gemfile* .ruby-version .node-version ./
RUN bundle update --bundler && \
    bundle config set --local without $BUNDLE_WITHOUT && \
    bundle install --jobs 4 --retry 3

# Install Yarn packages
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Precompile assets
RUN exec rake assets:precompile --trace

# Expose the port Heroku sets
EXPOSE $PORT

# Start the server