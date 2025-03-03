# frozen_string_literal: true

class AddAttachmentAudioToPerformances < ActiveRecord::Migration[5.1]
  def self.up
    change_table :performances do |t|
      # Commenting out this change. Paperclip has been depreciated.
      #
      # t.attachment :audio
    end
  end

  def self.down
    # Commenting out this change. Paperclip has been depreciated.
    #
    # remove_attachment :performances, :audio
  end
end
