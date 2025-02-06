# frozen_string_literal: true

require 'concerns/action_buttons_concern'

# Handles the server-side processing for Article datatables
# Implements sorting, searching, and pagination of Article records
# @see https://github.com/jbox-web/ajax-datatables-rails
class ArticleDatatable < AjaxDatatablesRails::ActiveRecord
  include ActionButtonsConcern

  # Define the columns and their properties for the datatable
  # @return [Hash] Column definitions with their search and sort configurations
  def view_columns
    # Declare strings in this format: ModelName.column_name
    # or in aliased_join_table.column_name format
    @view_columns ||= {
      title: { source: 'Article.title', cond: :like },
      date: { source: 'Article.created_at', searchable: false },
      status: { source: 'Article.status',
                searchable: false,
                sortable: false,
                orderable: false },
      categories: { source: 'Category.name', searchable: false },
      tags: { source: 'Tag.name', searchable: false },
      controls: { source: nil,
                  sortable: false,
                  searchable: false,
                  orderable: false }
    }
  end

  # Transform the records into the format expected by DataTables
  # @return [Array<Hash>] Formatted data for each record
  def data
    records.map do |record|
      {
        title: record.title,
        date: record.created_at.strftime('%m/%d/%Y'),
        status: record.status,
        categories: record.list_categories,
        tags: record.list_tags,
        controls: controls_html(record),
        DT_RowId: record.id
      }
    end
  end

  # Retrieve the base ActiveRecord scope for the datatable
  # @return [ActiveRecord::Relation] Base query with necessary includes
  def get_raw_records
    Article.includes(:tags, :categories)
  end
end
