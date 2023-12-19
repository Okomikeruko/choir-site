FROM heroku/heroku:20

RUN apt-get update && \
    apt-get install -y \
      git ruby-full yarn build-essential nodejs \
      postgresql-client libpq-dev libsqlite3-dev && \
    gem install bundler:1.17.3

WORKDIR /app

COPY Gemfile Gemfile.lock ./

RUN bundle install

COPY . ./

CMD ["sh"]