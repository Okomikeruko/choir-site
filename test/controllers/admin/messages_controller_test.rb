# frozen_string_literal: true

require 'test_helper'

module Admin
  # Test class for MessagesController within the Admin namespace
  class MessagesControllerTest < ActionDispatch::IntegrationTest
    def setup
      @message = messages :one
      sign_in users :admin
    end

    test 'should get index' do
      get admin_messages_path

      assert_response :success
      assert_template 'admin/messages/index'
      assert_select 'table#messages-datatable'
    end

    test 'should get index with JSON' do
      get admin_messages_path(format: :json), xhr: true

      assert_response :success

      json_response = response.parsed_body

      assert_includes json_response.keys, 'data'
      assert_includes json_response.keys, 'recordsTotal'
      assert_includes json_response.keys, 'recordsFiltered'
    end

    test 'should get show and mark as read' do
      @message.update(read: false)
      get admin_message_path(@message)

      assert_response :success
      assert_template 'admin/messages/show'

      @message.reload

      assert_predicate @message, :read?, 'Message should be marked as read after viewing'
    end

    test 'should mark messages as read via AJAX' do
      @message.update(read: false)

      post do_to_all_admin_messages_path,
           params: { all_messages: { msgs: [@message.id] },
                     commit: Admin::MessagesController::MARK_AS_READ },
           xhr: true

      assert_response :success
      @message.reload

      assert_predicate @message, :read?, 'Message should be marked as read'
    end

    test 'should mark messages as unread via AJAX' do
      @message.update(read: false)

      post do_to_all_admin_messages_path,
           params: { all_messages: { msgs: [@message.id] },
                     commit: Admin::MessagesController::MARK_AS_UNREAD },
           xhr: true

      assert_response :success
      @message.reload

      assert_not @message.read?, 'Message should be marked as unread'
    end
    test 'datatable should include required columns' do
      get admin_messages_path(format: :json), xhr: true

      json_response = response.parsed_body
      first_record = json_response['data'].first

      required_columns = %w[name email subject created_at]

      required_columns.each do |column|
        assert_includes first_record.keys, column,
                        "Datatable response should include #{column} column"
      end
    end
  end
end
