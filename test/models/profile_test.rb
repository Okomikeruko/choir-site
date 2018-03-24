require 'test_helper'

class ProfileTest < ActiveSupport::TestCase
  def setup
    @profile = profiles :one
  end
  
  test "should be valid" do 
    assert @profile.valid?
  end
  
  test "should have a name" do 
    @profile.name = ""
    assert_not @profile.valid?
  end
  
  test "name should not be too long" do 
    @profile.name = "a" * 61
    assert_not @profile.valid?
  end
  
  test "should have a title" do 
    @profile.title = ""
    assert_not @profile.valid?
  end
  
  test "title should not be too long" do 
    @profile.title = "a" * 61
    assert_not @profile.valid?
  end
  
  test "bio should be present" do 
    @profile.bio = ""
    assert_not @profile.valid?
  end
  
  test "bio should not be too long" do 
    @profile.title = "a" * 5001
    assert_not @profile.valid?
  end
end
