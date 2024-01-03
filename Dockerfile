FROM ruby:3.0

# Install curl and dependencies required to add NodeSource repository
RUN apt-get update -qq && \
    apt-get install -y curl gnupg software-properties-common

# Add NodeSource repository and install Node.js 16
RUN curl -sL https://deb.nodesource.com/gpgkey/nodesource.gpg.key | apt-key add - && \
    add-apt-repository "deb https://deb.nodesource.com/node_16.x $(lsb_release -sc) main" && \
    apt-get update -qq && \
    apt-get install -y nodejs

# Install Yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update -qq && \
    apt-get install -y yarn

# Install PostgreSQL client
RUN apt-get install -y postgresql libpq-dev

# Set the working direcory
WORKDIR /myapp

# Set environment variables
ENV GEM_HOME=/usr/local/bundle
ENV GEM_PATH=/usr/local/bundle
ENV BUNDLE_PATH=/usr/local/bundle
ENV BUNDLE_BIN=/usr/local/bundle/bin
ENV PATH="${BUNDLE_BIN}:${PATH}"

# Copy Gemfile and Gemfile.lock
COPY Gemfile /myapp/Gemfile
COPY Gemfile.lock /myapp/Gemfile.lock

# Install Bundler and gems
RUN gem uninstall bundler -aIx && \
    gem install bundler:2.2.33

# Use a build argument to specify the environment
ARG RAILS_ENV

# Conditionally install gems based on the environment
RUN if [ "$RAILS_ENV" = "production" ]; then \
    bundle config set --local without 'development test'; \
    elif [ "$RAILS_ENV" = "test" ]; then \
    bundle config set --local without 'development production'; \
    else \
    bundle config set --local without 'production'; \
    fi && \
    bundle install

COPY package.json /myapp/package.json
COPY yarn.lock /myapp/yarn.lock

RUN yarn install

# Expose the port the app runs on
EXPOSE 3000

# Copy the main application
COPY . /myapp/

# Start the main process
CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]