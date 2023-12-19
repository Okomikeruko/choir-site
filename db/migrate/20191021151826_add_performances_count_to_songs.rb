# frozen_string_literal: true

class AddPerformancesCountToSongs < ActiveRecord::Migration[5.1]
  def up
    add_column :songs, :performances_count, :integer, default: 0

    Song.reset_column_information
    Song.find_each do |s|
      Song.update_counters s.id, performances_count: s.performances.count
    end
  end

  def down
    remove_column :songs, :performances_count
  end
end
