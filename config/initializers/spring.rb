# frozen_string_literal: true

Spring.stop if Rails.env.production? && defined?(Spring)
