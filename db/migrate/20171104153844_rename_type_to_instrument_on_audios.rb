# frozen_string_literal: true

class RenameTypeToInstrumentOnAudios < ActiveRecord::Migration[5.1]
  def change
    rename_column :audios, :type, :instrument
  end
end
