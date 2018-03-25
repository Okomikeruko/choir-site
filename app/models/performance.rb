class Performance < ApplicationRecord
  has_many :performance_songs
  has_many :songs, through: :performance_songs
  
  validates :date,    presence: true
  validates :venue,   presence: true,
                      length: {maximum: 120}
  validates :details, length: {maximum: 5000}
  
  
  def self.get_next
    Performance.where(
      "date > :d", :d => DateTime.now.in_time_zone("Mountain Time (US & Canada)")
    ).first
  end
end
