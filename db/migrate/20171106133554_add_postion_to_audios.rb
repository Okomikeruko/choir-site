class AddPostionToAudios < ActiveRecord::Migration[5.1]
  def change
    add_column :audios, :position, :integer
  end
end
