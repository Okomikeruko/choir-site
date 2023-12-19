# frozen_string_literal: true

# Model for RehearsalSong
class RehearsalSong < ApplicationRecord
  belongs_to :rehearsal
  belongs_to :song
end
