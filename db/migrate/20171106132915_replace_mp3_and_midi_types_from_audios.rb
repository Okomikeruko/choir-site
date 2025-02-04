# frozen_string_literal: true

class ReplaceMp3AndMidiTypesFromAudios < ActiveRecord::Migration[5.1]
  def change
    remove_column :audios, :midi, :string
    remove_column :audios, :mp3,  :string

    add_attachment :audios, :midi
    add_attachment :audios, :mp3
  end
end
