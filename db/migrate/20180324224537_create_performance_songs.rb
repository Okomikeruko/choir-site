# frozen_string_literal: true

class CreatePerformanceSongs < ActiveRecord::Migration[5.1]
  def change
    create_table :performance_songs do |t|
      t.references :performance, foreign_key: true
      t.references :song, foreign_key: true

      t.timestamps
    end
  end
end
