# frozen_string_literal: true

require 'test_helper'

# Test class for StaticPagesController
class StaticPagesControllerTest < ActionDispatch::IntegrationTest
  test 'should get home' do
    get root_path
    assert_response :success
    assert_template 'static_pages/home'
  end
end
