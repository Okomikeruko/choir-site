# frozen_string_literal: true

class AddAttachmentLilypondToSongs < ActiveRecord::Migration[5.1]
  def self.up
    change_table :songs do |t|
      # Commenting out this change. Paperclip has been depreciated.
      #
      # t.attachment :lilypond
    end
  end

  def self.down
    # Commenting out this change. Paperclip has been depreciated.
    #
    # remove_attachment :songs, :lilypond
  end
end
