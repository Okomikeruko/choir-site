# frozen_string_literal: true

class RemoveDurationFromRehearsals < ActiveRecord::Migration[5.1]
  def change
    remove_column :rehearsals, :duration
  end
end
