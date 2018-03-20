require 'test_helper'

class SongsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get music_index_path
    assert_response :success
    assert_template "songs/index"
  end

end
