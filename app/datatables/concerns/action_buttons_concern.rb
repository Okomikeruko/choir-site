# frozen_string_literal: true

# Provides common functionality for rendering action buttons in datatables
# This concern handles the view context initialization and rendering of control buttons
#
# @example Usage in a datatable class
#   class MyDatatable < AjaxDatatablesRails::ActiveRecord
#     include ActionButtonsConcern
#   end
module ActionButtonsConcern
  extend ActiveSupport::Concern
  extend Forwardable

  def_delegators :@view, :render, :link_to, :concat, :content_tag

  # Initialize the datatable with parameters and options
  # @param params [Hash] Parameters from the datatables AJAX request
  # @param opts [Hash] Additional options for initialization
  # @option opts [ActionView::Base] :view_context The view context for rendering
  def initialize(params, opts = {})
    @view = opts[:view_context]
    super
  end

  # Generate HTML for the controls column
  # @param record [Article] The article record to generate controls for
  # @return [String] Rendered HTML for edit and delete controls
  def controls_html(record)
    render 'admin/shared/controls.html.haml',
           record: record,
           format: :html
  end
end
