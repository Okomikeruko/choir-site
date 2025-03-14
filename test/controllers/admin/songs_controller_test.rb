# frozen_string_literal: true

require 'test_helper'

module Admin
  # Test class for SongsController within the Admin namespace
  class SongsControllerTest < ActionDispatch::IntegrationTest
    def setup
      sign_in users :admin
      @song = songs :one
    end

    test 'should get index' do
      get admin_songs_path

      assert_response :success
      assert_template 'admin/songs/index'
    end

    test 'should get new' do
      get new_admin_song_path

      assert_response :success
      assert_template 'admin/songs/new'
      assert_template 'admin/songs/_form'
    end

    test 'should create new entry' do
      assert_difference 'Song.count', 1 do
        post admin_songs_path, params: { song: { title: 'Praise to the Man' } }

        assert_response :redirect
        assert_redirected_to edit_admin_song_path(assigns(:song))
      end
    end

    test 'should get edit' do
      get edit_admin_song_path(@song)

      assert_response :success
      assert_template 'admin/songs/edit'
      assert_template 'admin/songs/_form'
    end

    test 'should update song' do
      patch admin_song_path(@song), params: { song: { title: 'New Title' } }

      assert_response :redirect
      assert_redirected_to edit_admin_song_path(@song)
      @song.reload

      assert_equal 'New Title', @song.title
    end

    test 'should delete song' do
      assert_difference 'Song.count', -1 do
        delete admin_song_path(@song)

        assert_response :redirect
        assert_redirected_to admin_songs_path
      end
    end
  end
end
