# frozen_string_literal: true

if Rails.env.local?
  require 'prosopite'
  Prosopite.enabled = true
  Prosopite.rails_logger = true
end

Rails.application.config.after_initialize do
  Rails.application.config.assets.precompile += %w[.svg .eot .woff .woff2 .ttf]

  Rails.application.config.assets.paths << Rails.root.join('app/assets/fonts')
end
