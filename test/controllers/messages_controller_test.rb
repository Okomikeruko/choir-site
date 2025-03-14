# frozen_string_literal: true

require 'test_helper'

# Tests for the Messages Controller
class MessagesControllerTest < ActionDispatch::IntegrationTest
  def setup
    # Store original configuration
    @original_timestamp_enabled = InvisibleCaptcha.timestamp_enabled
    @original_spinner_enabled = InvisibleCaptcha.spinner_enabled
    @original_honeypots = InvisibleCaptcha.honeypots

    # Configure for testing
    InvisibleCaptcha.timestamp_enabled = false
    InvisibleCaptcha.spinner_enabled = false
    InvisibleCaptcha.honeypots = ['choir_part']
  end

  def teardown
    # Restore original configuration
    InvisibleCaptcha.timestamp_enabled = @original_timestamp_enabled
    InvisibleCaptcha.spinner_enabled = @original_spinner_enabled
    InvisibleCaptcha.honeypots = @original_honeypots
  end

  test 'should get new' do
    get contact_path

    assert_response :success
    assert_template 'messages/new'
    assert_select 'form'
    # The honeypot might be using different styling - check for the field itself
    assert_select 'input#message_choir_part', { count: 1 }
  end

  test 'can create message directly' do
    assert_difference 'Message.count', 1 do
      Message.create!(
        name: 'Test User',
        email: 'test@example.com',
        subject: 'Test Subject',
        message: 'Test message content'
      )
    end
  end

  test 'should create new message' do
    # Explicitly add the timestamp parameter that Invisible Captcha might be expecting
    timestamp = Time.current.to_i

    message_attrs = {
      name: 'Test User',
      email: 'test@example.com',
      subject: 'Test Subject',
      message: 'Test message body.'
    }

    assert_difference 'Message.count', 1 do
      post contact_path, params: {
        message: message_attrs,
        timestamp: timestamp,
        # Explicitly provide an empty honeypot field
        choir_part: nil
      }
    end

    assert_redirected_to contact_path
  end

  test 'should create new message with valid attributes' do
    assert_difference 'Message.count', 1 do
      post contact_path, params: {
        message: {
          name: 'Luke Skywalker',
          email: 'jedi@starwars.com',
          subject: 'New Recruits',
          message: 'Know anybody who can use the force?'
        }
      }
    end

    assert_redirected_to contact_path
    assert_equal 'Your message has been sent.', flash[:success]
  end

  test 'should not create message when honeypot field is filled (bot detection)' do
    # Turn timestamp validation off to isolate honeypot testing
    InvisibleCaptcha.timestamp_enabled = false

    assert_no_difference 'Message.count' do
      post contact_path, params: {
        message: {
          name: 'R2D2',
          email: 'droid@starwars.com',
          subject: 'Help me Obiwan',
          message: "You're my only hope.",
          choir_part: 'Tenor' # This is your honeypot field
        }
      }
    end

    # Per the Invisible Captcha gem, by default it responds with head(200)
    assert_response :success
  end

  test 'should not create message with invalid attributes' do
    assert_no_difference 'Message.count' do
      post contact_path, params: {
        message: {
          name: '', # Invalid: name is required
          email: 'not-an-email', # Invalid email format
          subject: 'Test Subject',
          message: 'Test Message'
        }
      }
    end

    assert_response :success
    assert_template 'messages/new'
    # Check for error messages without assuming specific formatting
    assert_select '#error-explanation'
  end
end
