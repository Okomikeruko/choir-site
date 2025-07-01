FROM whittakertech/choir-base:latest

# Accept build arguments
ARG RAILS_MASTER_KEY
ARG SECRET_KEY_BASE

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
RUN RAILS_MASTER_KEY=$RAILS_MASTER_KEY SECRET_KEY_BASE=$SECRET_KEY_BASE exec rake assets:precompile --trace

# Expose the port Heroku sets
EXPOSE $PORT

# Start the server
CMD ["bundle", "exec", "puma", "-C", "config/puma.rb"]