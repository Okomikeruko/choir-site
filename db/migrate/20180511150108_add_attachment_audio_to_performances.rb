# frozen_string_literal: true

class AddAttachmentAudioToPerformances < ActiveRecord::Migration[5.1]
  def self.up
    change_table :performances do |t|
      t.attachment :audio
    end
  end

  def self.down
    remove_attachment :performances, :audio
  end
end
