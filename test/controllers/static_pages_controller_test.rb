# frozen_string_literal: true

require 'test_helper'

# Test class for StaticPagesController
class StaticPagesControllerTest < ActionDispatch::IntegrationTest
<<<<<<< HEAD
  test 'should get home' do
    get root_path
    assert_response :success
    assert_template 'static_pages/home'
=======
  def setup
    puts root_url
  end

  test "should get home" do
    get root_path
    assert_response :success
    assert_template "static_pages/home"
  end

  test "should get about-us" do
    get about_us_path
    assert_response :success
    assert_template "static_pages/about_us"
>>>>>>> dd81094369acd42422a5e56e3d73c4c93df1ce4b
  end
end
