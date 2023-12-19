# frozen_string_literal: true

class CreateMembers < ActiveRecord::Migration[5.1]
  def change
    create_table :members do |t|
      t.string :name
      t.string :email
      t.string :phone
      t.string :talents
      t.text :vocal_range

      t.timestamps
    end
  end
end
