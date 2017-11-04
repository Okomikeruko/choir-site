class Audio < ApplicationRecord
  belongs_to :song
  
  validates :instrument, presence: true,
                         length: { maximum: 60 }
end
