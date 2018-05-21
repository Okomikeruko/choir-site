class MessageMailer < ApplicationMailer

  def contact_form(message)
    @message = message 
    
    mail to: "whittakerlee81@gmail.com",
         subject: @message.subject,
         from: @message.email
  end
end
