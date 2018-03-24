require 'test_helper'

class PerformanceTest < ActiveSupport::TestCase
  def setup
    @performance = performances :one
  end
  
  test "performance should be valid" do 
    assert @performance.valid?
  end
  
  test "performance should have a date" do 
    @performance.date = nil
    assert_not @performance.valid?
  end
  
  test "performance should have a venue" do 
    @performance.venue = ""
    assert_not @performance.valid?
  end
  
  test "performance details should not be too long" do 
    @performance.details = "a" * 5001
    assert_not @performance.valid?
  end
end
