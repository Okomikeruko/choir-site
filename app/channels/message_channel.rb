# frozen_string_literal: true

# Channel for handling updating the unread message counter.
class MessageChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'message_channel'
  end

  def unsubscribed
    # Clean up events go here
  end
end
