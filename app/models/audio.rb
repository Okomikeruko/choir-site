class Audio < ApplicationRecord
  default_scope { order(position: :asc) }
  
  belongs_to :song
  
  has_attached_file :midi
  has_attached_file :mp3
  
  validates :instrument, presence: true,
                         length: { maximum: 60 }
  validates_attachment :midi, :content_type => { content_type: %w(audio/midi) }
  validates_attachment :mp3,  :content_type => { content_type: %w(audio/mpeg audio/mp3) }
end
