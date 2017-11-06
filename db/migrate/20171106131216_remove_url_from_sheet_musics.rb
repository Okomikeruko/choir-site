class RemoveUrlFromSheetMusics < ActiveRecord::Migration[5.1]
  def change
    remove_column :sheet_musics, :url, :string
  end
end
