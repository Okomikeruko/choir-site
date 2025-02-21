# Use Ruby 3.0.7
FROM ruby:3.0.7

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update -qq && apt-get install -y \
    build-essential \
    libpq-dev \
    nodejs \
    yarn

# Install gems
COPY Gemfile Gemfile.lock ./
RUN gem install bundler && bundle install --jobs 4 --retry 3

# Copy the app
COPY . .

# Precompile assets
ENV RAILS_ENV=production
RUN bundle exec rails assets:precompile