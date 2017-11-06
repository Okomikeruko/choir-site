class AddPositionToSheetMusics < ActiveRecord::Migration[5.1]
  def change
    add_column :sheet_musics, :position, :integer
  end
end
