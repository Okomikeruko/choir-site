# frozen_string_literal: true

require 'test_helper'

module Admin
  # Test class for CategoriesController within the Admin namespace
  class CategoriesControllerTest < ActionDispatch::IntegrationTest
    def setup
      sign_in users :admin
      @category = categories :one
    end

    test 'should get index' do
      get admin_categories_path
      assert_response :success
      assert_template 'admin/categories/index'
    end

    test 'should create a new category' do
      assert_difference 'Category.count', 1 do
        post admin_categories_path, params: {
          category: { name: 'New category',
                      slug: 'new-category' }
        }
        assert_response :redirect
        assert_redirected_to admin_categories_path
      end
    end

    test 'should update a category' do
      patch admin_category_path(@category), params: {
        category: { name: 'New category Name',
                    slug: 'new-category-name' }
      }
      assert_response :redirect
      assert_redirected_to admin_categories_path
      @category.reload
      assert_equal 'New category Name', @category.name
      assert_equal 'new-category-name', @category.slug
    end

    test 'should delete a category' do
      category = categories :deletable
      assert_difference 'Category.count', -1 do
        delete admin_category_path(category)
        assert_response :redirect
        assert_redirected_to admin_categories_path
      end
    end
  end
end
