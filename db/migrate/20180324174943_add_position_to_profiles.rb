class AddPositionToProfiles < ActiveRecord::Migration[5.1]
  def change
    add_column :profiles, :position, :integer
  end
end
