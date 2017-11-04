require 'test_helper'

class SheetMusicTest < ActiveSupport::TestCase
  def setup
    @sheet_music = sheet_musics :one
  end
  
  test "should be valid" do
    assert @sheet_music.valid?
  end
  
  test "should have instrument" do 
    @sheet_music.instrument = ""
    assert_not @sheet_music.valid?
  end
  
  test "instrument should not be too long" do
    @sheet_music.instrument = "a" * 61
    assert_not @sheet_music.valid?
  end
  
  test "should belong to a song" do 
    @sheet_music.song = nil
    assert_not @sheet_music.valid?
  end
end
