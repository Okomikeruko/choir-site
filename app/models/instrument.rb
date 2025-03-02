# frozen_string_literal: true

# Model for Instrument
class Instrument < ApplicationRecord
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

  validate :correct_mime_types

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

  def correct_mime_types
    {
      pdf: %w[application/pdf],
      midi: %w[audio/midi],
      mp3: %w[audio/mpeg audio/mp3]
    }.each do |attr, content_types|
      obj = send(attr)
      next unless obj.attached? && content_types.exclude?(obj.content_type)

      errors.add(attr, "Must be an #{attr.to_s.upcase} file")
    end
  end
end
