# frozen_string_literal: true

class FixInstrumentsNameIndex < ActiveRecord::Migration[6.1]
  def change
    if index_exists?(:instruments, :name, name: 'index_instruments_on_lower_name_and_song')
      remove_index :instruments, :name, name: 'index_instruments_on_lower_name_and_song'
    end
  end
end
