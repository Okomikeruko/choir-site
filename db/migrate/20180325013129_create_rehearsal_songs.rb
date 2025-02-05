# frozen_string_literal: true

class CreateRehearsalSongs < ActiveRecord::Migration[5.1]
  def change
    create_table :rehearsal_songs do |t|
      t.references :rehearsal, foreign_key: true
      t.references :song, foreign_key: true

      t.timestamps
    end
  end
end
