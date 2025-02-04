# frozen_string_literal: true

class ChangePdfColumnTypeInSheetMusics < ActiveRecord::Migration[5.1]
  def change
    add_attachment :sheet_musics, :pdf
  end
end
