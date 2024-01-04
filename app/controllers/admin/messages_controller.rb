# frozen_string_literal: true

module Admin
  # Controller for managing messages in the admin section.
  class MessagesController < AdminController
    def index
      @messages = Message.paginate(page: params[:page], per_page: 20)
    end

    def show
      @message = Message.find params[:id]
      @message.mark_as_read
    end

    def do_to_all
      @messages = Message.where id: params[:all_messages][:msgs]
      case params[:commit]
      when 'Mark as Read', 'Mark as Unread'
        read = params[:commit] == 'Mark as Read'
        @messages.find_each { |message| message.update(read: read) }
      when 'Delete Messages'
        @messages.destroy_all
      end
      redirect_to admin_messages_path(page: params[:all_messages][:page])
    end
  end
end
