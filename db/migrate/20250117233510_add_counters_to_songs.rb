class AddCountersToSongs < ActiveRecord::Migration[6.1]
  def change
    add_column :songs,:instruments_count, :integer, default: 0
  end
end
