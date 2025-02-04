# frozen_string_literal: true

class AddAttachmentLilypondToSongs < ActiveRecord::Migration[5.1]
  def self.up
    change_table :songs do |t|
      t.attachment :lilypond
    end
  end

  def self.down
    remove_attachment :songs, :lilypond
  end
end
