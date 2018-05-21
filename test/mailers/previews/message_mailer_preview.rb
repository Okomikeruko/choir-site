# Preview all emails at http://localhost:3000/rails/mailers/message_mailer
class MessageMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/message_mailer/contact_form
  def contact_form
    message = Message.first
    MessageMailer.contact_form(message)
  end

end
