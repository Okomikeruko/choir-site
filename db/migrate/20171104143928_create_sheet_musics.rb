# frozen_string_literal: true

class CreateSheetMusics < ActiveRecord::Migration[5.1]
  def change
    create_table :sheet_musics do |t|
      t.string :type
      t.string :url
      t.references :song, foreign_key: true

      t.timestamps
    end
  end
end
