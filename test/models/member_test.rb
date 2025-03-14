# frozen_string_literal: true

require 'test_helper'

# Test class for the Member model
class MemberTest < ActiveSupport::TestCase
  def setup
    @member = members :lee
  end

  test 'should be valid' do
    assert_predicate @member, :valid?
  end

  test 'should have a name' do
    @member.name = ''

    assert_not @member.valid?
  end

  test 'name should not be too long' do
    @member.name = 'a' * 61

    assert_not @member.valid?
  end

  test 'email should not be too long' do
    @member.email = "#{'a' * 244}@example.com"

    assert_not @member.valid?
  end

  test 'email validation should accept valid addresses' do
    valid_addresses = %w[user@example.com USER@foo.COM A_US-ER@foo.bar.org
                         first.last@foo.jp alice+bob@baz.cn]
    valid_addresses.each do |valid_address|
      @member.email = valid_address

      assert_predicate @member, :valid?, "#{valid_address.inspect} should be valid"
    end
  end

  test 'email validation should reject invalid addresses' do
    invalid_addresses = %w[user@example,com user_at_foo.org user.name@example.
                           foo@bar_baz.com foo@bar+baz.com]
    invalid_addresses.each do |invalid_address|
      @member.email = invalid_address

      assert_not @member.valid?, "#{invalid_address.inspect} should be invalid"
    end
  end

  test 'vocal_range should not be empty' do
    @member.vocal_range = []

    assert_not @member.valid?
  end
end
