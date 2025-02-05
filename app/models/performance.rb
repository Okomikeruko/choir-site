# frozen_string_literal: true

# Model for Performance
class Performance < ApplicationRecord
  default_scope { order(date: :desc) }

  has_many :performance_songs, dependent: :destroy
  has_many :songs, through: :performance_songs

  # has_attached_file :audio
  has_one_attached :audio

  validates :date,    presence: true
  validates :venue,   presence: true,
                      length: { maximum: 120 }
  validates :details, length: { maximum: 5000 }

  validate :correct_mp3_mime_type

  class << self
    def find_next(num = 1)
      all_upcoming.first(num)
    end

    def all_upcoming
      where(
        'date > :d', d: DateTime.now.in_time_zone('Mountain Time (US & Canada)')
      ).sort_by(&:date)
    end

    def all_history
      where(
        'date < :d', d: DateTime.now.in_time_zone('Mountain Time (US & Canada)')
      ).sort_by(&:date).reverse
    end
  end

  private

  def correct_mp3_mime_type
    return unless audio.attached? && !mp3.content_type.in?(%w[audio/mpeg audio/mp3])

    errors.add(:audio, 'Must be an MP3 file')
  end
end
