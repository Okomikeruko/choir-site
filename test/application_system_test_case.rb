# frozen_string_literal: true

require 'test_helper'

# Test class for ApplicationSystemTestCase
class ApplicationSystemTestCase < ActionDispatch::SystemTestCase
  driven_by :selenium, using: :chrome, screen_size: [1400, 1400]
end
