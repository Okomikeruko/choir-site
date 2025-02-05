# frozen_string_literal: true

# Handles the server-side processing for Article datatables
# Implements sorting, searching, and pagination of Article records
# @see https://github.com/jbox-web/ajax-datatables-rails
class ArticleDatatable < AjaxDatatablesRails::ActiveRecord
  extend Forwardable

  # Delegate render method to the view context
  def_delegators :@view, :render

  # Initialize the datatable with parameters and options
  # @param params [Hash] Parameters from the datatables AJAX request
  # @param opts [Hash] Additional options for initialization
  # @option opts [ActionView::Base] :view_context The view context for rendering
  def initialize(params, opts = {})
    @view = opts[:view_context]
    super
  end

  # Define the columns and their properties for the datatable
  # @return [Hash] Column definitions with their search and sort configurations
  def view_columns
    # Declare strings in this format: ModelName.column_name
    # or in aliased_join_table.column_name format
    @view_columns ||= {
      title: { source: 'Article.title', cond: :like },
      date: { source: 'Article.created_at', searchable: false },
      status: { source: 'Article.status', searchable: false },
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

  private

  # Generate HTML for the controls column
  # @param record [Article] The article record to generate controls for
  # @return [String] Rendered HTML for edit and delete controls
  def controls_html(record)
    render 'admin/shared/controls.html.haml',
           edit_path: edit_resource_path(record),
           delete_path: resource_path(record),
           format: :html
  end

  # Generate the path for editing a record
  # @param record [Article] The article record
  # @return [Array] Array representing the edit path components
  def edit_resource_path(record)
    [:edit, :admin, record]
  end

  # Generate the path for a record
  # @param record [Article] The article record
  # @return [Array] Array representing the path components
  def resource_path(record)
    [:admin, record]
  end
end
