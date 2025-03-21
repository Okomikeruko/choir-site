# frozen_string_literal: true

require 'test_helper'

# Test class for the Message model
class MessageTest < ActiveSupport::TestCase
  def setup
    @message = messages :one
  end

  test 'should be valid' do
    assert_predicate @message, :valid?
  end

  test 'should have a name' do
    @message.name = ''

    assert_not @message.valid?
  end

  test 'name should not be too long' do
    @message.name = 'a' * 61

    assert_not @message.valid?
  end

  test 'should have an email address' do
    @message.email = ''

    assert_not @message.valid?
  end

  test 'email should not be too long' do
    @message.email = "#{'a' * 244}@example.com"

    assert_not @message.valid?
  end

  test 'email validation should accept valid addresses' do
    valid_addresses = %w[user@example.com USER@foo.COM A_US-ER@foo.bar.org
                         first.last@foo.jp alice+bob@baz.cn]
    valid_addresses.each do |valid_address|
      @message.email = valid_address

      assert_predicate @message, :valid?, "#{valid_address.inspect} should be valid"
    end
  end

  test 'email validation should reject invalid addresses' do
    invalid_addresses = %w[user@example,com user_at_foo.org user.name@example.
                           foo@bar_baz.com foo@bar+baz.com]
    invalid_addresses.each do |invalid_address|
      @message.email = invalid_address

      assert_not @message.valid?, "#{invalid_address.inspect} should be invalid"
    end
  end

  test 'subject should be present' do
    @message.subject = ''

    assert_not @message.valid?
  end

  test 'subject should not be too long' do
    @message.subject = 'a' * 121

    assert_not @message.valid?
  end

  test 'message should be present' do
    @message.message = ''

    assert_not @message.valid?
  end

  test 'message should not be too long' do
    @message.message = 'a' * 5001

    assert_not @message.valid?
  end

  test 'read should be either true or false' do
    @message.read = nil

    assert_not @message.valid?
  end
end
