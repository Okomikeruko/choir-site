# frozen_string_literal: true

class CreateProfiles < ActiveRecord::Migration[5.1]
  def change
    create_table :profiles do |t|
      t.string :name
      t.string :title
      t.text :bio
      t.attachment :image

      t.timestamps
    end
  end
end
