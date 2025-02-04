FROM ruby:3.0-slim

# Install system dependencies
RUN apt-get update -qq && \
    apt-get install -y --no-install-recommends curl build-essential gnupg software-properties-common && \
    curl -sL https://deb.nodesource.com/gpgkey/nodesource.gpg.key | apt-key add - && \
    echo "deb https://deb.nodesource.com/node_16.x bullseye main" | tee /etc/apt/sources.list.d/nodesource.list && \
    apt-get update -qq && \
    apt-get install -y nodejs && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update -qq && \
    apt-get install -y yarn postgresql libpq-dev && \
    # Add development tools
    apt-get install -y vim git && \
    apt-get autoremove -y && apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /myapp

# Set environment variables
ENV GEM_HOME=/usr/local/bundle
ENV GEM_PATH=/usr/local/bundle
ENV BUNDLE_PATH=/usr/local/bundle
ENV BUNDLE_BIN=/usr/local/bundle/bin
ENV PATH="${BUNDLE_BIN}:${PATH}"
ENV RAILS_ENV=development

# Copy dependency files
COPY Gemfile* package.json yarn.lock ./

# Install all gems including development and test
RUN bundle config set --local without 'production' && \
    bundle install

# Install yarn packages
RUN yarn install

COPY . .

# Expose development port
EXPOSE 3000

# Start development server with hot reload
CMD ["bash"]