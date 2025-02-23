# frozen_string_literal: true

require_relative 'boot'
require 'rails/all'
require 'fog/core'

Fog::Logger[:deprecation] = nil

# Require the gems listed in Gemfile
Bundler.require(*Rails.groups)

module Choir
  class Application < Rails::Application
    config.load_defaults 6.0
    config.autoloader = :classic

    config.generators do |g|
      g.stylesheets = false
      g.javascripts = false
      g.skip_routes = true
    end

    config.serve_static_assets = true
    config.time_zone = 'Mountain Time (US & Canada)'
    config.active_record.default_timezone = :local
    config.action_view.sanitized_allowed_attributes = 'class', 'id', 'href', 'style', 'target', 'rel'

    config.hosts << 'localhost'
    config.hosts << '.vfs.cloud9.us-west-2.amazonaws.com'
    config.hosts << ENV.fetch('DOMAIN', nil)

    config.active_job.queue_adapter = :sidekiq
    config.autoload_paths += Dir["#{config.root}/app/datatables/**/"]
  end
end