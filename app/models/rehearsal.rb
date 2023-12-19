# frozen_string_literal: true

# Model for Rehearsal
class Rehearsal < ApplicationRecord
  before_validation :set_date

  default_scope { order(date: :desc) }

  has_many :rehearsal_songs, dependent: :destroy
  has_many :songs, through: :rehearsal_songs

  validates :date,  presence: true
  validates :time,  presence: true,
                    length: { maximum: 20 }
  validates :venue, length: { maximum: 120 }
  validates :host,  length: { maximum: 60 }

  has_one_attached :audio
  validate :correct_mp3_mime_type

  attr_accessor :date_holder

  class << self
    def all_past
      where(
        'date < :d', d: DateTime.now.in_time_zone('Mountain Time (US & Canada)')
      )
    end

    def find_next
      where(
        'date > :d', d: DateTime.now.in_time_zone('Mountain Time (US & Canada)')
      ).first
    end

    def find_most_recent
      all_past.first
    end
  end

  def song_list
    songs.map do |s|
      ActionController::Base.helpers.link_to(
        s.title,
        Rails.application.routes.url_helpers.music_path(s.slug)
      )
    end.to_sentence.html_safe
  end

  private

  def set_date
    return if date_holder.blank?

    self.date = DateTime.strptime(date_holder, '%m/%d/%Y')
                        .end_of_day
                        .in_time_zone('Mountain Time (US & Canada)')
  end

  def correct_mp3_mime_type
    if audio.attached? && !mp3.content_type.in?(%w[audio/mpeg audio/mp3])
      errors.add(:audio, 'Must be an MP3 file')
    end
  end
end
