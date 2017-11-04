class RenameTypeToInstrumentOnSheetMusics < ActiveRecord::Migration[5.1]
  def change
    rename_column :sheet_musics, :type, :instrument
  end
end
