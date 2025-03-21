# frozen_string_literal: true

require 'test_helper'

# Test class for the Category model
class CategoryTest < ActiveSupport::TestCase
  def setup
    @category = categories :one
  end

  test 'should be valid' do
    assert_predicate @category, :valid?
  end

  test 'should have a name' do
    @category.name = ''

    assert_not @category.valid?
  end

  test 'name should not be too long' do
    @category.name = 'a' * 31

    assert_not @category.valid?
  end

  test 'name should be unique' do
    duplicate_category = @category.dup
    duplicate_category.slug += '1'
    @category.save

    assert_not duplicate_category.valid?
  end

  test 'should have a slug' do
    @category.slug = ''

    assert_not @category.valid?
  end

  test 'slug should not be too long' do
    @category.slug = 'a' * 31

    assert_not @category.valid?
  end

  test 'slug should be unique' do
    duplicate_category = @category.dup
    duplicate_category.name += '1'
    @category.save

    assert_not duplicate_category.valid?
  end
end
