class CreateRehersalSongs < ActiveRecord::Migration[5.1]
  def change
    create_table :rehersal_songs do |t|
      t.references :rehersal, foreign_key: true
      t.references :song, foreign_key: true

      t.timestamps
    end
  end
end
