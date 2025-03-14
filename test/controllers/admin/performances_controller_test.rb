# frozen_string_literal: true

require 'test_helper'

module Admin
  # Test class for PerformancesController within the Admin namespace
  class PerformancesControllerTest < ActionDispatch::IntegrationTest
    def setup
      sign_in users :admin
      @performance = performances :one
    end

    test 'should get index' do
      get admin_performances_path

      assert_response :success
      assert_template 'admin/performances/index'
    end

    test 'should get new' do
      get new_admin_performance_path

      assert_response :success
      assert_template 'admin/performances/new'
    end

    test 'should create new performance' do
      assert_difference 'Performance.count', 1 do
        post admin_performances_path, params: { performance: { venue: 'Here',
                                                               date: 2.days.from_now.strftime('%m/%d/%Y'),
                                                               details: 'None' } }

        assert_response :redirect
        assert_redirected_to admin_performances_path
      end
    end

    test 'should get edit' do
      get edit_admin_performance_path(@performance)

      assert_response :success
      assert_template 'admin/performances/edit'
    end

    test 'should update performance' do
      patch admin_performance_path(@performance),
            params: {
              performance: {
                venue: 'Here',
                date: '03/25/2001',
                details: 'None'
              }
            }

      assert_response :redirect
      assert_redirected_to admin_performances_path
      @performance.reload

      assert_equal 'Here', @performance.venue
      assert_equal 'None', @performance.details
      assert_equal '03/25/2001', @performance.date.strftime('%m/%d/%Y')
    end

    test 'should delete peformance' do
      assert_difference 'Performance.count', -1 do
        delete admin_performance_path(@performance)

        assert_response :redirect
        assert_redirected_to admin_performances_path
      end
    end
  end
end
