# frozen_string_literal: true

# Only load and start SimpleCov if not disabled
require 'simplecov'
require 'simplecov-json'

SimpleCov.start 'rails' do
  coverage_dir 'coverage'
  enable_coverage :branch
  formatter SimpleCov::Formatter::JSONFormatter
  add_filter '/test/'
  add_filter '/config/'
  add_filter '/vendor/'
  add_group 'Controllers', 'app/controllers'
  add_group 'Models', 'app/models'
  add_group 'Helpers', 'app/helpers'
  add_group 'Mailers', 'app/mailers'
  add_group 'Views', 'app/views'
  add_group 'Jobs', 'app/jobs'
  add_group 'Presenters', 'app/presenters'
  add_group 'Model Concerns', 'app/models/concerns'
  add_group 'Controller Concerns', 'app/controllers/concerns'
end

# Load Rails environment and necessary testing libraries
require File.expand_path('../config/environment', __dir__)
require 'rails/test_help'
require 'minitest/reporters'
Minitest::Reporters.use! unless ENV['RM_INFO']

# Module for ActiveSupport, providing testing facilities
module ActiveSupport
  # Class for TestCase within ActiveSupport, serving as the base class for Rails model tests
  class TestCase
    # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
    fixtures :all

    # Add more helper methods to be used by all tests here...
  end
end

# Module for ActionController, providing testing facilities
module ActionController
  # Class for TestCase within ActionController, extending ActiveSupport::TestCase with controller testing helpers
  class TestCase
    # Include Devise test controller helpers for convenience
    include Devise::Test::ControllerHelpers
  end
end

# Module for ActionDispatch, providing integration testing facilities
module ActionDispatch
  # Class for IntegrationTest within ActionDispatch, extending ActiveSupport::TestCase with integration testing helpers
  class IntegrationTest
    # Include Devise test integration helpers for convenience
    include Devise::Test::IntegrationHelpers
  end
end
