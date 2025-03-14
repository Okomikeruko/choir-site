# frozen_string_literal: true

require 'test_helper'

# Test class for RehearsalsController
class RehearsalsControllerTest < ActionDispatch::IntegrationTest
  test 'should get index' do
    get rehearsals_path

    assert_response :success
    assert_template 'rehearsals/index'
  end
end
