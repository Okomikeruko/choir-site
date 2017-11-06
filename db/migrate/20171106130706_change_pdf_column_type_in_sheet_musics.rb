class ChangePdfColumnTypeInSheetMusics < ActiveRecord::Migration[5.1]
  def change
    remove_column :sheet_musics, :pdf, :string
    
    add_attachment :sheet_musics, :pdf
  end
end
