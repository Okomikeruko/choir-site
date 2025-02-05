# frozen_string_literal: true

# Model for Instrument
class Instrument < ApplicationRecord
  extend PaperclipToActiveStorage

  default_scope { order(position: :asc) }
  belongs_to :song, counter_cache: true

  # paperclip_attachment_with_active_storage :pdf
  # paperclip_attachment_with_active_storage :midi
  # paperclip_attachment_with_active_storage :mp3

  has_one_attached :pdf
  has_one_attached :midi
  has_one_attached :mp3

  validates :name, presence: true,
                   length: { maximum: 60 },
                   uniqueness: { scope: :song, case_sensitive: false }

  validate :correct_pdf_mime_type
  validate :correct_midi_mime_type
  validate :correct_mp3_mime_type

  def empty?
    pdf_blob.nil? && mp3_blob.nil? && midi_blob.nil?
  end

  def pdf_and_audio?
    !pdf_blob.nil? && (!mp3_blob.nil? || !midi_blob.nil?)
  end

  # def self.populate
  #   Song.find_each do |song|
  #     song.sheet_musics.each do |s|
  #       i = Instrument.new
  #       i.song = song
  #       i.name = s.instrument
  #       i.position = s.position
  #       i.pdf = s.pdf
  #       a = song.audios.find_by(:instrument => s.instrument)
  #       unless a.blank?
  #         i.mp3  = a.mp3  unless a.mp3.blank?
  #         i.midi = a.midi unless a.midi.blank?
  #       end
  #       i.save!
  #     end
  #   end
  # end

  private

  def correct_pdf_mime_type
    return unless pdf.attached? && !pdf.content_type.in?(%w[application/pdf])

    errors.add(:pdf, 'Must be a PDF file')
  end

  def correct_midi_mime_type
    return unless midi.attached? && !midi.content_type.in?(%w[audio/midi])

    errors.add(:midi, 'Must be a MIDI file')
  end

  def correct_mp3_mime_type
    return unless mp3.attached? && !mp3.content_type.in?(%w[audio/mpeg audio/mp3])

    errors.add(:mp3, 'Must be an MP3 file')
  end
end
