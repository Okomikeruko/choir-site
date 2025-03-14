# frozen_string_literal: true

require 'test_helper'

# Test class for the Rehearsal model
class RehearsalTest < ActiveSupport::TestCase
  def setup
    @rehearsal = rehearsals :one
  end

  test 'should be valid' do
    assert_predicate @rehearsal, :valid?
  end

  test 'should have date' do
    @rehearsal.date = nil

    assert_not @rehearsal.valid?
  end

  test 'should have a time' do
    @rehearsal.time = ''

    assert_not @rehearsal.valid?
  end

  test 'time should not be too long' do
    @rehearsal.time = 'a' * 21

    assert_not @rehearsal.valid?
  end

  test 'venue should not be too long' do
    @rehearsal.venue = 'a' * 121

    assert_not @rehearsal.valid?
  end

  test 'host should not be too long' do
    @rehearsal.host = 'a' * 61

    assert_not @rehearsal.valid?
  end
end
