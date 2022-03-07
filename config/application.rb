require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Choir
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.2
    config.autoloader = :classic

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    config.generators do |g|
      g.stylesheets = false
      g.javascripts = false
      g.skip_routes = true
    end
    config.serve_static_assets = true
    config.time_zone = "Mountain Time (US & Canada)"
    config.active_record.default_timezone = :local
    
    config.action_view.sanitized_allowed_attributes = 'class', 'id', 'href', 'style', 'target', 'rel'
    
    # config.hosts << "e950a60eb7c74bc58b11cb2f300f1e45.vfs.cloud9.us-west-2.amazonaws.com"
    
    config.active_job.queue_adapter = :sidekiq
  end
end