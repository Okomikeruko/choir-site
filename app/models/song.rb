# frozen_string_literal: true

# Model for Song
class Song < ApplicationRecord
  include DatatableColumnsConcern

  define_datatable_column :title,
                          label: 'Song Title'
  define_datatable_column :instruments_count,
                          label: 'Instruments'
  define_datatable_column :performances_count,
                          label: 'Performances'
  define_controls_column formatter: ->(record) { helpers.controls_html(record) }

  before_save :set_slug, :set_sort_order

  default_scope { order(sort_order: :asc) }

  has_many :instruments, inverse_of: :song, dependent: :destroy
  accepts_nested_attributes_for :instruments,
                                reject_if: :all_blank,
                                allow_destroy: true

  has_many :performance_songs, inverse_of: :song, dependent: :destroy
  has_many :performances, through: :performance_songs, counter_cache: true

  has_many :rehearsal_songs, inverse_of: :song, dependent: :destroy
  has_many :rehearsals, through: :rehearsal_songs

  # paperclip_attachment_with_active_storage :lilypond

  has_one_attached :lilypond

  validates :title, presence: true,
                    length: { maximum: 60 }

  attr_readonly :slug, :sort_order

  # do_not_validate_attachment_file_type :lilypond

  def primary_instrument
    instruments.detect { |i| i.mp3.attached? }
  end

  class << self
    def unused
      where(performances_count: 0)
    end

    def alphabetized
      all.group_by { |song| song.sort_order.chr }
    end

    def for_display
      includes(
        { instruments: %i[pdf_attachment pdf_blob mp3_attachment mp3_blob midi_attachment midi_blob] },
        { rehearsals: [:songs, { audio_attachment: :blob }] },
        :performances
      )
    end
  end

  private

  def set_slug
    self.slug = title&.parameterize
  end

  def set_sort_order
    if title&.starts_with?('The ', 'A ', 'An ')
      word = title&.partition(' ')&.first
      self.sort_order = title["#{word} ".size..].concat(", #{word}") if word
    else
      self.sort_order = title
    end
  end
end
