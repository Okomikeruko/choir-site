require 'test_helper'

class MessagesControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get contact_path
    assert_response :success
    assert_template "messages/new"
  end
  
  test "should create new message" do 
    assert_difference "Message.count", 1 do 
      post contact_path params: { 
        message: {
          name: "Luke Skywalker",
          email: "jedi@starwars.com",
          choir_part: nil,
          subject: "New Recruits",
          message: "Know anybody who can use the force?"
        }
      }
      assert_response :redirect 
      assert_redirected_to contact_path
    end
  end
  
  test "should block bots from sending messages" do 
    assert_no_difference "Message.count" do 
      post contact_path params: {
        message: {
          name: "R2D2",
          email: "droid@starwars.com",
          choir_part: "Tenor",
          subject: "Help me Obiwan",
          message: "You're my only hope."
        }
      }
    end
  end

end
