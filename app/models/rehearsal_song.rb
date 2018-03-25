class RehearsalSong < ApplicationRecord
  belongs_to :rehearsal
  belongs_to :song
end
