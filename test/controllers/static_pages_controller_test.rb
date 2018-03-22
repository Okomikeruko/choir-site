require 'test_helper'

class StaticPagesControllerTest < ActionDispatch::IntegrationTest
  
  test "should get about-us" do 
    get about_us_path
    assert_response :success
    assert_template "static_pages/about_us"
  end
end
