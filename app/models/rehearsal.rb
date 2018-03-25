class Rehearsal < ApplicationRecord
  has_many :rehearsal_songs
  has_many :songs, through: :rehearsal_songs
  
  validates :date, presence: true
  validates :duration, presence: true,
                       numericality: {
                         only_integer: true,
                         greater_than: 0 }
  validates :venue, length: {maximum: 120}
  validates :host,  length: {maximum:  60}
  
  
end
