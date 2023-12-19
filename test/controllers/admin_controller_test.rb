# frozen_string_literal: true

require 'test_helper'

# Test class for AdminController
class AdminControllerTest < ActionDispatch::IntegrationTest
  test 'should redirect to login page if not signed in' do
    get admin_index_path
    assert_response :redirect
    assert_redirected_to new_user_session_path
  end

  test 'should get index if logged in' do
    sign_in users :admin
    get admin_index_path
    assert_response :success
    assert_template 'admin/index'
  end
end
