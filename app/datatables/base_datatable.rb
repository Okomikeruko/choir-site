# frozen_string_literal: true

# Handles the server-side processing for Article datatables
# Implements sorting, searching, and pagination of Article records
# @see https://github.com/jbox-web/ajax-datatables-rails
class BaseDatatable < AjaxDatatablesRails::ActiveRecord
  extend Forwardable

  def_delegators :@view, :render, :link_to, :concat, :content_tag
  attr_reader :model_class, :view

  def initialize(params, opts = {})
    @model_class = opts.delete(:model_class) || opts.delete(:model_name)&.to_s&.classify&.constantize
    @view = opts[:view_context]
    super(params, opts)
  end

  def view_columns
    @view_columns ||= model_class.datatable_columns.transform_values do |config|
      {
        source: config[:source],
        searchable: config[:searchable],
        sortable: config[:sortable],
        orderable: config[:orderable]
      }.compact
    end
  end

  def data
    records.map do |record|
      data_hash = model_class.datatable_columns.transform_values do |config|
        config[:formatter].call(record)
      end

      data_hash.merge(DT_RowId: record.id)
    end
  end

  # Retrieve the base ActiveRecord scope for the datatable
  # @return [ActiveRecord::Relation] Base query with necessary includes
  def get_raw_records
    model_class.for_datatable
  end
end
