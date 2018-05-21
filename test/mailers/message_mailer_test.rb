require 'test_helper'

class MessageMailerTest < ActionMailer::TestCase
  test "contact_form" do
    @message = messages :one
    mail = MessageMailer.contact_form(@message)
    assert_equal @message.subject, mail.subject
    assert_equal ["whittakerlee81@gmail.com"], mail.to
    assert_equal [@message.email], mail.from
    assert_match "You have a new message from choir.CascadeSixth.com", 
                 mail.body.encoded
    assert_match @message.created_at.strftime("%l:%M %P - %b %-d, %Y"),
                 mail.body.encoded
    assert_match @message.name,
                 mail.body.encoded
    assert_match @message.email, 
                 mail.body.encoded
    assert_match @message.message, 
                 mail.body.encoded
  end

end
