# frozen_string_literal: true

class AddSortOrderToSongs < ActiveRecord::Migration[5.1]
  def change
    add_column :songs, :sort_order, :string
  end
end
