# frozen_string_literal: true

require 'test_helper'

# Test class for the Song model
class SongTest < ActiveSupport::TestCase
  def setup
    @song = songs :one
  end

  test 'should be valid' do
    assert_predicate @song, :valid?
  end

  test 'should have a title' do
    @song.title = ''

    assert_not @song.valid?
  end

  test 'title should not be too long' do
    @song.title = 'a' * 61

    assert_not @song.valid?
  end

  test 'sort_order should be set before save' do
    @song.title = 'The Long and Winding Road'
    @song.save

    assert_equal 'Long and Winding Road, The', @song.sort_order
  end

  test 'slug should be set before save' do
    @song.title = 'The Long and Winding Road'
    @song.save

    assert_equal 'the-long-and-winding-road', @song.slug
  end
end
