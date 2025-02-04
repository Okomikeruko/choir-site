# frozen_string_literal: true

require 'test_helper'

# Test class for the Tag model
class TagTest < ActiveSupport::TestCase
  def setup
    @tag = categories :one
  end

  test 'should be valid' do
    assert @tag.valid?
  end

  test 'should have a name' do
    @tag.name = ''
    assert_not @tag.valid?
  end

  test 'name should not be too long' do
    @tag.name = 'a' * 31
    assert_not @tag.valid?
  end

  test 'name should be unique' do
    duplicate_category = @tag.dup
    duplicate_category.slug += '1'
    @tag.save
    assert_not duplicate_category.valid?
  end

  test 'should have a slug' do
    @tag.slug = ''
    assert_not @tag.valid?
  end

  test 'slug should not be too long' do
    @tag.slug = 'a' * 31
    assert_not @tag.valid?
  end

  test 'slug should be unique' do
    duplicate_category = @tag.dup
    duplicate_category.name += '1'
    @tag.save
    assert_not duplicate_category.valid?
  end
end
