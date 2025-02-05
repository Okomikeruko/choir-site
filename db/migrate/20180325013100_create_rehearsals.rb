# frozen_string_literal: true

class CreateRehearsals < ActiveRecord::Migration[5.1]
  def change
    create_table :rehearsals do |t|
      t.datetime :date
      t.integer :duration
      t.string :venue
      t.string :host
      t.attachment :audio

      t.timestamps
    end
  end
end
