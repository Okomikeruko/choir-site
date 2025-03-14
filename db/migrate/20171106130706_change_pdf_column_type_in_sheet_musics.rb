# frozen_string_literal: true

class ChangePdfColumnTypeInSheetMusics < ActiveRecord::Migration[5.1]
  def change
    # Commenting out this change. Paperclip has been depreciated.
    #
    # add_attachment :sheet_musics, :pdf
  end
end
