# frozen_string_literal: true

# Model for Performance
class Performance < ApplicationRecord
  include DatatableColumnsConcern

  define_datatable_column :date,
                          label: 'Performance Date',
                          formatter: ->(record) { record.date.strftime('%m/%d/%Y') }
  define_datatable_column :venue
  define_datatable_column :songs,
                          formatter: ->(record) { record.songs.map(&:title).to_sentence }
  define_controls_column formatter: ->(record) { helpers.controls_html(record) }

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

    def with_songs
      unscoped.includes(:songs)
    end

    def all_upcoming
      with_songs
        .where(date: DateTime.now...)
        .order(date: :asc)
    end

    def all_history
      with_songs
        .where(date: ...DateTime.now)
        .order(date: :desc)
    end

    def group_by_month_and_year
      # First group by year
      by_year = all.group_by { |record| record.date&.year }

      # Then for each year, group by month
      by_year.transform_values do |year_records|
        year_records.group_by { |record| record.date&.month }
                    .transform_keys { |month| Date::MONTHNAMES[month][0..2] }
      end
    end
  end

  private

  def correct_mp3_mime_type
    return unless audio.attached? && !audio.content_type.in?(%w[audio/mpeg audio/mp3])

    errors.add(:audio, 'Must be an MP3 file')
  end
end
