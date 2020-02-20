class Admin::MessagesController < AdminController
  def index
    @messages = Message.paginate(:page => params[:page], :per_page => 20)
  end

  def show
    @message = Message.find params[:id]
    @message.mark_as_read
  end

  def do_to_all
    @messages = Message.where id: params[:all_messages][:msgs]
    case params[:commit]
    when "Mark as Read"
      @messages.update_all(:read => true)
    when "Mark as Unread"
      @messages.update_all(:read => false)
    when "Delete Messages"
      @messages.destroy_all
    end
    redirect_to admin_messages_path(:page => params[:all_messages][:page])
  end
end