class Performance < ApplicationRecord
  has_many :performance_songs, dependent: :destroy 
  has_many :songs, through: :performance_songs
  
  has_attached_file :audio 
  
  validates :date,    presence: true
  validates :venue,   presence: true,
                      length: {maximum: 120}
  validates :details, length: {maximum: 5000}
  
  validates_attachment :audio,  :content_type => { content_type: %w(audio/mpeg audio/mp3) }
  
  
  def self.get_next(num = 1)
    Performance.where(
      "date > :d", :d => DateTime.now.in_time_zone("Mountain Time (US & Canada)")
    ).first(num).sort_by { |perf| perf.date }
  end
  
  def self.all_upcoming
    Performance.where(
      "date > :d", :d => DateTime.now.in_time_zone("Mountain Time (US & Canada)")
    ).sort_by { |perf| perf.date }
  end
  
  def self.all_history
    Performance.where(
      "date < :d", :d => DateTime.now.in_time_zone("Mountain Time (US & Canada)")
    ).sort_by { |perf| perf.date }.reverse
  end
  
  
end
