# frozen_string_literal: true

require 'test_helper'

module Admin
  # Test class for ArticlesController within the Admin namespace
  class ArticlesControllerTest < ActionDispatch::IntegrationTest
    def setup
      @article = articles :one
      @admin = users :admin
      sign_in @admin
    end

    test 'should get index' do
      get admin_articles_path
      assert_response :success
      assert_template 'admin/articles/index'
    end

    test 'should get new' do
      get new_admin_article_path
      assert_response :success
      assert_template 'admin/articles/new'
    end

    test 'should create a new entry' do
      assert_difference 'Article.count', 1 do
        post admin_articles_path, params: {
          article: { title: 'New Article',
                     content: 'Article Content',
                     user_id: @admin.id }
        }
        assert_response :redirect
        
        article = assigns :article
        assert_redirected_to edit_admin_article_path(article)
      end
    end

    test 'should get edit' do
      get edit_admin_article_path(@article)
      assert_response :success
      assert_template 'admin/articles/edit'
    end

    test 'should update an existing article' do
      patch admin_article_path(@article), params: {
        article: { title: 'Updated Title',
                   content: 'Updated content.' }
      }
      assert_response :redirect
      assert_redirected_to edit_admin_article_path(@article)
      @article.reload
      assert_equal 'Updated Title',    @article.title
      assert_equal 'Updated content.', @article.content
    end

    test 'should delete article' do
      assert_difference 'Article.count', -1 do
        delete admin_article_path(@article)
        assert_response :redirect
        assert_redirected_to admin_articles_path
      end
    end
  end
end
