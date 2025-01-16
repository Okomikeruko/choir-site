# frozen_string_literal: true

# Songs Datatable
class SongsDatatable < Effective::Datatable
  datatable do
    col :id, visible: false
    col :created_at, visible: false
    col :title, label: 'Song Title'
    col :instruments_count, label: 'Number of Instruments'
    col :performances_count, label: 'Number of Performances'

    actions_col
  end

  collection do
    Song.all
  end
end
