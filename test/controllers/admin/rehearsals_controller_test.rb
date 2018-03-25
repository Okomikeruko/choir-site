require 'test_helper'

class Admin::RehearsalsControllerTest < ActionDispatch::IntegrationTest
  def setup
    sign_in users :admin
    @rehearsal = rehearsals :one
  end
  
  test "should get index" do
    get admin_rehearsals_path
    assert_response :success
    assert_template "admin/rehearsals/index"
  end

  test "should get new" do
    get new_admin_rehearsal_path
    assert_response :success
    assert_template "admin/rehearsals/new"
  end
  
  test "should create new rehearsal" do 
    assert_difference "Rehearsal.count", 1 do 
      post admin_rehearsals_path, params: { 
        rehearsal: { host: "Your's Truly",
                     venue: "Wherever",
                     date_holder: "12/20/2020",
                     time: "1:00 PM - 5:00 PM" }
      }
      assert_response :redirect
      assert_redirected_to admin_rehearsals_path
    end
  end

  test "should get edit" do
    get edit_admin_rehearsal_path(@rehearsal)
    assert_response :success
    assert_template "admin/rehearsals/edit"
  end
  
  test "should update rehearsal" do 
    patch admin_rehearsal_path(@rehearsal), 
      params: {
        rehearsal: { host: "Your's Truly",
                     venue: "Wherever",
                     date_holder: "12/20/2020",
                     time: "1:00 PM - 5:00 PM" }
      }
    assert_response :redirect
    assert_redirected_to admin_rehearsals_path
    @rehearsal.reload
    assert_equal "Your's Truly",      @rehearsal.host
    assert_equal "Wherever",          @rehearsal.venue
    assert_equal "12/20/2020",        @rehearsal.date.strftime("%m/%d/%Y")
    assert_equal "1:00 PM - 5:00 PM", @rehearsal.time
  end
  
  test "should destroy rehearsal" do 
    assert_difference "Rehearsal.count", -1 do 
      delete admin_rehearsal_path(@rehearsal)
      assert_response :redirect 
      assert_redirected_to admin_rehearsals_path
    end
  end

end
