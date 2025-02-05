# frozen_string_literal: true

# Controller for managing messages.
class MessagesController < ApplicationController
  invisible_captcha only: [:create], honeypot: :choir_part

  add_breadcrumb 'Home', :root_path
  add_breadcrumb 'Contact', :contact_path

  def new
    @message = Message.new
  end

  def create
    @message = Message.new(message_params)
    if @message.save
      @message.send_email
      flash[:success] = t '.success'
      redirect_to contact_path
    else
      render 'new'
    end
  end

  private

  def message_params
    params.require(:message).permit(:name,
                                    :email,
                                    :subject,
                                    :message)
  end
end
