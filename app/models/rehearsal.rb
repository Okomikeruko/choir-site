class Rehearsal < ApplicationRecord
  before_validation :set_date
  
  default_scope { order(date: :desc) }
  
  has_many :rehearsal_songs
  has_many :songs, through: :rehearsal_songs
  
  validates :date,  presence: true
  validates :time,  presence: true,
                    length: {maximum: 20}
  validates :venue, length: {maximum: 120}
  validates :host,  length: {maximum:  60}
  
  has_attached_file :audio
  
  attr_accessor :date_holder
  
  private
    def set_date
      unless date_holder.blank?
        self.date = DateTime.strptime(date_holder, "%m/%d/%Y")
                            .end_of_day
                            .in_time_zone("Mountain Time (US & Canada)")
      end
    end
end
