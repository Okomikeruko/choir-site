# frozen_string_literal: true

if Rails.env.local?
  require 'prosopite'
  Prosopite.enabled = true
  Prosopite.rails_logger = true
end