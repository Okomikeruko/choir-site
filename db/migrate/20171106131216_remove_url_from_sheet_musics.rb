# frozen_string_literal: true

class RemoveUrlFromSheetMusics < ActiveRecord::Migration[5.1]
  def change
    # Commenting out this change. Paperclip has been depreciated.
    #
    # remove_column :sheet_musics, :url, :string
  end
end
