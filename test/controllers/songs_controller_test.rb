# frozen_string_literal: true

require 'test_helper'

# Test class for SongsController
class SongsControllerTest < ActionDispatch::IntegrationTest
  test 'should get index' do
    get music_index_path
    assert_response :success
    assert_template 'songs/index'
  end

  test 'should get show' do
    song = songs :one
    get music_path(song.slug)
    assert_response :success
    assert_template 'songs/show'
  end
end
