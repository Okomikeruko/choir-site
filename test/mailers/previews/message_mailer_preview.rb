# frozen_string_literal: true

# Test class for MessageMailerPreview
class MessageMailerPreview < ActionMailer::Preview
  def contact_form
    message = Message.first
    MessageMailer.contact_form(message)
  end
end
