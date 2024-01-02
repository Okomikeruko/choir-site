FROM ruby:3.0
RUN apt-get update -qq && \
    apt-get install -y \
        nodejs \
        postgresql \
        libpq-dev
WORKDIR /myapp
COPY Gemfile /myapp/Gemfile
COPY Gemfile.lock /myapp/Gemfile.lock
RUN bundle config set --global path '/usr/local/bundle' && \
    gem install bundler:2.2.33 && \ 
    bundle install

EXPOSE 3000

COPY . /myapp/

CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]