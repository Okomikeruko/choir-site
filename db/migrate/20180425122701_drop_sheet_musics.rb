class DropSheetMusics < ActiveRecord::Migration[5.1]
  def change
    drop_table :sheet_musics
  end
end
