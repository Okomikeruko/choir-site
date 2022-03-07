class Instrument < ApplicationRecord
  extend PaperclipToActiveStorage
  
  default_scope { order(position: :asc) }
  belongs_to :song

  has_paperclip_attachment_with_active_storage :pdf
  has_paperclip_attachment_with_active_storage :midi
  has_paperclip_attachment_with_active_storage :mp3

  validates :name, presence: true,
                   length: { maximum: 60 },
                   uniqueness: {scope: :song, case_sensitive: false}

  validates_attachment :pdf,  :content_type => { content_type: %w(application/pdf) }
  validates_attachment :midi, :content_type => { content_type: %w(audio/midi) }
  validates_attachment :mp3,  :content_type => { content_type: %w(audio/mpeg audio/mp3) }

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

end