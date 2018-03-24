require 'test_helper'

class Admin::ProfilesControllerTest < ActionDispatch::IntegrationTest
  def setup
    sign_in users :admin 
    @profile = profiles :one
  end
  
  test "should get index" do
    get admin_profiles_path
    assert_response :success
    assert_template "admin/profiles/index"
  end

  test "should get new" do
    get new_admin_profile_path
    assert_response :success
    assert_template "admin/profiles/new"
  end
  
  test "should create new entry" do 
    assert_difference "Profile.count", 1 do 
      post admin_profiles_path, params: { profile: { name: "Name", 
                                                    title: "Title",
                                                    bio: "bio" } }
      assert_response :redirect
      assert_redirected_to admin_profiles_path
    end
  end

  test "should get edit" do
    get edit_admin_profile_path(@profile)
    assert_response :success
    assert_template "admin/profiles/edit"
  end
  
  test "should update profile" do 
    patch admin_profile_path(@profile), params: { profile: { name: "Name", 
                                                    title: "Title",
                                                    bio: "bio" } }
    assert_response :redirect 
    assert_redirected_to admin_profiles_path
    @profile.reload
    assert_equal "Name",  @profile.name
    assert_equal "Title", @profile.title
    assert_equal "bio",   @profile.bio
  end
  
  test "should delete profile" do
    assert_difference "Profile.count", -1 do 
      delete admin_profile_path(@profile)
      assert_response :redirect 
      assert_redirected_to admin_profiles_path
    end
  end

end
