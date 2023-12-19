# frozen_string_literal: true

class DropAudios < ActiveRecord::Migration[5.1]
  def change
    drop_table :audios
  end
end
