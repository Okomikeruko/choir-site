# frozen_string_literal: true

# Model for RehearsalSong
class RehearsalSong < ApplicationRecord
  belongs_to :rehearsal, counter_cache: true
  belongs_to :song
end
