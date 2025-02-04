# frozen_string_literal: true

class CreatePerformances < ActiveRecord::Migration[5.1]
  def change
    create_table :performances do |t|
      t.string :venue
      t.datetime :date
      t.text :details

      t.timestamps
    end
  end
end
