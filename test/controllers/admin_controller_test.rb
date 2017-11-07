require 'test_helper'

class AdminControllerTest < ActionDispatch::IntegrationTest
  
  test "should redirect to login page if not signed in" do 
    get admin_index_path
    assert_response :redirect 
    assert_redirected_to new_user_session_path
  end

  test "index should redirect to songs if logged in" do
    sign_in users :admin
    get admin_index_path
    assert_response :redirect 
    assert_redirected_to admin_songs_path
  end
  
end
