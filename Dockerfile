# Use an official Ruby runtime as a parent image
FROM ruby:3.0.0

# Install nodejs and yarn
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client yarn
RUN npx browserslist@latest --update-db

# Set the working directory in the container to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in Gemfile
RUN bundle install --without development test

# Precompile Rails assets
# RUN RAILS_ENV=production bundle exec rake assets:precompile

# Provide dummy data to Rails so it can pre-compile assets
# RUN SECRET_KEY_BASE=1 RAILS_ENV=production bundle exec rake assets:precompile

EXPOSE 3000

# Run the app when the container launches
CMD ["bundle", "exec", "puma", "-C", "config/puma.rb"]

# FROM heroku/heroku:20

# RUN apt-get update && \
#     apt-get install -y \
#       git ruby-full yarn build-essential nodejs \
#       postgresql-client libpq-dev libsqlite3-dev && \
#     gem install bundler:1.17.3

# WORKDIR /app

# COPY Gemfile Gemfile.lock ./

# RUN bundle install

# COPY . ./

# CMD ["sh"]