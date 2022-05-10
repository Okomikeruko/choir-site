source 'https://rubygems.org'
ruby "2.7.5"

gem 'rails',                   '6.0.0.beta1'
gem 'bcrypt',                  '3.1.11'
gem 'faker',                   '1.7.3'
gem 'carrierwave',             '1.1.0'
gem 'mini_magick',             '~> 4.7'
gem 'fog'
gem 'will_paginate',           '3.1.5'
gem 'bootstrap-will_paginate', '1.0.0'
gem 'bootstrap-sass',          '3.3.7'
gem 'puma',                    '3.9.1'
gem 'sass-rails'
gem 'uglifier',                '3.2.0'
gem 'coffee-rails',            '4.2.2'
gem 'jquery-rails',            '4.3.1'
gem 'turbolinks',              '5.0.1'
gem 'jbuilder',                '2.7.0'
gem 'font-awesome-sass',       '~> 5.15.1'
gem "webpacker"

gem 'devise'
gem 'haml'
# gem 'haml-rails'
gem 'bootstrap-datepicker-rails'
gem 'cocoon'
gem 'jquery-ui-rails'
gem 'paperclip'
gem "delayed_paperclip"
gem 'aws-sdk-s3', require: false
gem 'breadcrumbs_on_rails'
gem 'multipart-post'
gem "wysiwyg-rails"
gem "invisible_captcha"
gem "sidekiq"


group :development, :test do
  gem 'sqlite3', '1.3.13'
  gem 'byebug',  '9.0.6', platform: :mri
end

group :development do
  gem 'web-console',           '3.5.1'
  gem 'listen',                '3.0.8'
  gem 'spring',                '2.0.2'
  gem 'spring-watcher-listen', '2.0.1'
  gem 'erb2haml'
  gem "rails_best_practices"
end

group :test do
  gem 'rails-controller-testing'
  gem 'minitest-reporters',       '1.1.14'
  gem 'guard',                    '2.14.1'
  gem 'guard-minitest',           '2.4.6'
end

group :production do
  gem 'pg', '~> 0.20'
  gem "aws-sdk-s3"
  gem "rails_12factor"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]