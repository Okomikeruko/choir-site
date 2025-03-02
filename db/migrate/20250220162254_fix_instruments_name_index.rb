# frozen_string_literal: true

class FixInstrumentsNameIndex < ActiveRecord::Migration[6.1]
  def change
    if index.exists?(:instruments, name: 'index_instruments_on_lower_name_and_song')
      remove_index :instruments, name: 'index_instruments_on_lower_name_and_song'
    end
  end
end
