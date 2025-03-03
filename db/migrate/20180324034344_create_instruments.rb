# frozen_string_literal: true

class CreateInstruments < ActiveRecord::Migration[5.1]
  def change
    create_table :instruments do |t|
      t.string :name
      t.integer :position
      t.references :song, foreign_key: true
      # Commenting out this change. Paperclip has been depreciated.
      #
      # t.attachment :pdf
      # t.attachment :mp3
      # t.attachment :midi
      t.timestamps
    end
  end
end
