# frozen_string_literal: true

require 'concerns/action_buttons_concern'

# CategoryDatatable handles server-side processing for Category data tables
#
# @example Basic usage in controller
#   def index
#     respond_to do |format|
#       format.json { render json: CategoryDatatable.new(params, view_context: view_context) }
#     end
#   end
#
# @see https://github.com/jbox-web/ajax-datatables-rails
class CategoryDatatable < AjaxDatatablesRails::ActiveRecord
  extend Forwardable

  def_delegators :@view, :polymorphic_path, :sanitize

  # Defines the columns and their properties for the datatable
  # @return [Hash] Column definitions with source, sortability and searchability
  def view_columns
    @view_columns ||= {
      name: { source: 'Category.name' },
      slug: { source: 'Category.slug' },
      articles_count: { source: 'Category.articles_count' },
      controls: { source: nil,
                  sortable: false,
                  searchable: false,
                  orderable: false }
    }
  end

  # Formats the data for each row in the datatable
  # @return [Array<Hash>] Array of formatted row data
  def data
    records.map do |record|
      {
        name: record.name,
        slug: record.slug,
        articles_count: record.articles_count,
        controls: controls(record),
        DT_RowId: record.id
      }
    end
  end

  # Defines the base query for fetching records
  # @return [ActiveRecord::Relation] Base query for categories
  def get_raw_records
    Category.all
  end

  private

  # Renders the control buttons for a category row
  # @param record [Category] The category record
  # @return [String] Sanitized HTML for edit modal button and delete link
  def controls(record)
    sanitize(
      <<-HTML,
         <button type="button" data-toggle="modal" data-target="#category-#{record.id}" class="btn btn-default btn-xs">
           <span class="glyphicon glyphicon-pencil"></span>
         </button>
         &nbsp;
         <a href="#{polymorphic_path([:admin, record])}" class="btn btn-danger btn-xs" data-method="delete"
            data-confirm="Are you sure?" rel="nofollow">
           <span class="glyphicon glyphicon-remove"></span>
         </a>
      HTML
      tags: %w[a button span],
      attributes: %w[class data-confirm data-method data-target data-toggle href rel type]
    )
  end
end
