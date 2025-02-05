# frozen_string_literal: true

require 'test_helper'

module Admin
  # Test class for TagsController within the Admin namespace
  class TagsControllerTest < ActionDispatch::IntegrationTest
    def setup
      sign_in users :admin
      @tag = tags :one
    end

    test 'should get index' do
      get admin_tags_path
      assert_response :success
      assert_template 'admin/tags/index'
    end

    test 'should create a new tag' do
      assert_difference 'Tag.count', 1 do
        post admin_tags_path, params: {
          tag: { name: 'New Tag',
                 slug: 'new-tag' }
        }
        assert_response :redirect
        assert_redirected_to admin_tags_path
      end
    end

    test 'should update a tag' do
      patch admin_tag_path(@tag), params: {
        tag: { name: 'New Tag Name',
               slug: 'new-tag-name' }
      }
      assert_response :redirect
      assert_redirected_to admin_tags_path
      @tag.reload
      assert_equal 'New Tag Name', @tag.name
      assert_equal 'new-tag-name', @tag.slug
    end

    test 'should delete a tag' do
      assert_difference 'Tag.count', -1 do
        delete admin_tag_path(@tag)
        assert_response :redirect
        assert_redirected_to admin_tags_path
      end
    end
  end
end
