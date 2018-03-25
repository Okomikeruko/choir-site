require 'test_helper'

class RehearsalTest < ActiveSupport::TestCase
  def setup
    @rehearsal = rehearsals :one
  end
  
  test "should be valid" do 
    assert @rehearsal.valid?
  end
  
  test "should have date" do 
    @rehearsal.date = nil
    assert_not @rehearsal.valid?
  end
  
  test "should have a positive duration" do 
    @rehearsal.duration = 0
    assert_not @rehearsal.valid?
  end
  
  test "venue should not be too long" do 
    @rehearsal.venue = "a" * 121
    assert_not @rehearsal.valid?
  end
  
  test "host should not be too long" do 
    @rehearsal.host = "a" * 61
    assert_not @rehearsal.valid?
  end
end
