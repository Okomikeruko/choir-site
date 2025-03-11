# frozen_string_literal: true

# Be sure to restart your server when you modify this file.

# Configure the application's secret_key_base for verifying the integrity of signed cookies.
Rails.application.config.secret_key_base = Rails.application.credentials.dig(Rails.env.to_sym, :secret_key_base)

# Fall back to ENV variable for production if not found in credentials
if Rails.env.production? && Rails.application.config.secret_key_base.nil?
  Rails.application.config.secret_key_base = ENV.fetch('SECRET_KEY_BASE')
end
