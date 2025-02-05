# frozen_string_literal: true

class CreateSongs < ActiveRecord::Migration[5.1]
  def change
    create_table :songs do |t|
      t.string :title
      t.datetime :performance_date

      t.timestamps
    end
  end
end
