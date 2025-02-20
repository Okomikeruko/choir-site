# frozen_string_literal: true

module Admin
  # Controller for managing messages in the admin section.
  class MessagesController < AdminController
    datatable_model Message

    MARK_AS_READ = 'Mark As Read'
    MARK_AS_UNREAD = 'Mark As Unread'
    DELETE_MESSAGES = 'Delete Messages'
    VALID_ACTIONS = [MARK_AS_READ, MARK_AS_UNREAD, DELETE_MESSAGES].freeze

    def index
      respond_with_datatable
    end

    def show
      @message = Message.find params[:id]
      @message.mark_as_read
    end

    def do_to_all
      @messages = Message.where id: params[:all_messages][:msgs]
      action = params[:commit].to_s
      return head :bad_request unless VALID_ACTIONS.include?(action)

      action == DELETE_MESSAGES ? @messages.destroy_all : update_read_status(@messages, action)
      head :ok
    end

    private

    def update_read_status(messages, action)
      messages.each { |message| message.update(read: action == MARK_AS_READ) }
    end
  end
end
