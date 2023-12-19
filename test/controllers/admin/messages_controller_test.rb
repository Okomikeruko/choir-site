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
    end

    test 'should get show' do
      get admin_message_path(@message)
      assert_response :success
      assert_template 'admin/messages/show'
    end

    test 'should mark messages as read' do
      @message.update_attribute :read, false
      assert_equal @message.read, false
      post do_to_all_admin_messages_path params: {
        all_messages: { msgs: [@message.id] },
        commit: 'Mark as Read'
      }
      assert_response :redirect
      assert_redirected_to admin_messages_path
      @message.reload
      assert_equal @message.read, true
    end

    test 'should mark messages as unread' do
      @message.update_attribute :read, true
      assert_equal @message.read, true
      post do_to_all_admin_messages_path params: {
        all_messages: { msgs: [@message.id] },
        commit: 'Mark as Unread'
      }
      assert_response :redirect
      assert_redirected_to admin_messages_path
      @message.reload
      assert_equal @message.read, false
    end

    test 'should delete messages' do
      assert_difference 'Message.count', -1 do
        post do_to_all_admin_messages_path params: {
          all_messages: { msgs: [@message.id] },
          commit: 'Delete Messages'
        }
        assert_response :redirect
        assert_redirected_to admin_messages_path
      end
    end
  end
end
