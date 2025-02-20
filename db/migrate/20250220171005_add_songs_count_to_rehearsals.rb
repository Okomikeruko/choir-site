# frozen_string_literal: true

class AddSongsCountToRehearsals < ActiveRecord::Migration[6.1]
  def change
    add_column :rehearsals, :rehearsal_songs_count, :integer, default: 0, null: false

    Rehearsal.find_each do |rehearsal|
      Rehearsal.reset_counters(rehearsal.id, :rehearsal_songs)
    end
  end
end
