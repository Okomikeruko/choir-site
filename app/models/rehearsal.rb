class Rehearsal < ApplicationRecord
  before_validation :set_date

  default_scope { order(date: :desc) }

  has_many :rehearsal_songs, dependent: :destroy
  has_many :songs, through: :rehearsal_songs

  validates :date,  presence: true
  validates :time,  presence: true,
                    length: {maximum: 20}
  validates :venue, length: {maximum: 120}
  validates :host,  length: {maximum:  60}

  has_attached_file :audio
  validates_attachment :audio,  :content_type => { content_type: %w(audio/mpeg audio/mp3) }

  attr_accessor :date_holder

  class << self
    def all_past
      where(
        "date < :d", :d => DateTime.now.in_time_zone("Mountain Time (US & Canada)")
      )
    end

    def get_next
      where(
        "date > :d", :d => DateTime.now.in_time_zone("Mountain Time (US & Canada)")
      ).first
    end

    def get_most_recent
      all_past.first
    end
  end

  def song_list
    songs.map{ |s|
      ActionController::Base.helpers.link_to(
        s.title,
        Rails.application.routes.url_helpers.music_path(s.slug)
      )
    }.to_sentence.html_safe
  end

  private
    def set_date
      unless date_holder.blank?
        self.date = DateTime.strptime(date_holder, "%m/%d/%Y")
                            .end_of_day
                            .in_time_zone("Mountain Time (US & Canada)")
      end
    end
end