# frozen_string_literal: true

class AddUniqueIndexToInstrumentsNameAndSong < ActiveRecord::Migration[6.1]
  def change
    add_index :instruments, %i[name song_id], unique: true
  end
end
