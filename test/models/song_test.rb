require 'test_helper'

class SongTest < ActiveSupport::TestCase
  
  def setup
    @song = songs :one
  end
  
  test "should be valid" do
    assert @song.valid?
  end
  
  test "should have a title" do
    @song.title = ""
    assert_not @song.valid?
  end
  
  test "title should not be too long" do 
    @song.title = "a" * 61
    assert_not @song.valid?
  end
  
  
  
end
