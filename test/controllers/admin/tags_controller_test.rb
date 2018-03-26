require 'test_helper'

class Admin::TagsControllerTest < ActionDispatch::IntegrationTest
  
  def setup
    sign_in users :admin
  end
  
  test "should get index" do
    get admin_tags_path
    assert_response :success
    assert_template "admin/tags/index"
  end

end
