class AddTimeToRehearsals < ActiveRecord::Migration[5.1]
  def change
    add_column :rehearsals, :time, :string
  end
end
