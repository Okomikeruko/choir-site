# frozen_string_literal: true

class AddDescriptionToSongs < ActiveRecord::Migration[5.1]
  def change
    add_column :songs, :description, :text
  end
end
