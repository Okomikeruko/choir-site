# frozen_string_literal: true

require 'test_helper'

# Test class for the Instrument model
class InstrumentTest < ActiveSupport::TestCase
  def setup
    @instrument = instruments :soprano
  end

  test 'should be valid' do
    assert_predicate @instrument, :valid?
  end

  test 'should have a name' do
    @instrument.name = ''

    assert_not @instrument.valid?
  end

  test 'name should not be too long' do
    @instrument.name = 'a' * 61

    assert_not @instrument.valid?
  end

  test 'name should be unique to a song' do
    @instrument.name = 'tenor'

    assert_not @instrument.valid?
    @instrument.song = songs :two

    assert_predicate @instrument, :valid?
  end

  test 'should belong to a song' do
    @instrument.song = nil

    assert_not @instrument.valid?
  end
end
