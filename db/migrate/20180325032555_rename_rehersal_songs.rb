class RenameRehersalSongs < ActiveRecord::Migration[5.1]
  def change
    rename_table :rehersal_songs, :rehearsal_songs
    rename_column :rehearsal_songs, :rehersal_id, :rehearsal_id
  end
end
