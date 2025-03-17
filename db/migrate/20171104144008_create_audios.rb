# frozen_string_literal: true

class CreateAudios < ActiveRecord::Migration[5.1]
  def change
    create_table :audios do |t|
      t.string :type
      t.string :midi
      t.string :mp3
      t.references :song, foreign_key: true

      t.timestamps
    end
  end
end
