require 'test_helper'

class StaticPagesControllerTest < ActionDispatch::IntegrationTest
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
  end
end
