# frozen_string_literal: true

# config/environments/development.rb
Rails.application.configure do
  # Settings specified here will take precedence over those in config/application.rb.
  config.cache_classes = false
  config.eager_load = false
  config.consider_all_requests_local = true

  # Enable/disable caching
  if Rails.root.join('tmp/caching-dev.txt').exist?
    config.action_controller.perform_caching = true
    config.cache_store = :memory_store
    config.public_file_server.headers = {
      'Cache-Control' => "public, max-age=#{2.days.seconds.to_i}"
    }
  else
    config.action_controller.perform_caching = false
    config.cache_store = :null_store
  end

  config.action_mailer.raise_delivery_errors = true
  config.action_mailer.delivery_method = :test
  config.action_mailer.perform_caching = false

  host = 'localhost:3000'
  config.action_mailer.default_url_options = { host: host, protocol: 'http' }

  # Print deprecation notices to the Rails logger.
  config.active_support.deprecation = :log

  # Raise an error on page load if there are pending migrations.
  config.active_record.migration_error = :page_load

  # Debug mode disables concatenation and preprocessing of assets.
  config.assets.debug = true

  # Suppress logger output for asset requests.
  config.assets.quiet = true

  config.file_watcher = ActiveSupport::EventedFileUpdateChecker

  config.active_storage.service = :local
end
