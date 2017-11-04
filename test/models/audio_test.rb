require 'test_helper'

class AudioTest < ActiveSupport::TestCase
  def setup
    @audio = audios :one
  end
  
  test "should be valid" do
    assert @audio.valid?
  end
  
  test "should have an instrument" do
    @audio.instrument = ""
    assert_not @audio.valid?
  end
  
  test "instrument should not be too long" do
    @audio.instrument = "a" * 61
    assert_not @audio.valid?
  end
  
  test "should belong to a song" do 
    @audio.song = nil
    assert_not @audio.valid?
  end
end
