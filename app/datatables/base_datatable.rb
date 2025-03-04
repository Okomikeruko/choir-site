# frozen_string_literal: true

# Handles the server-side processing for Article datatables
# Implements sorting, searching, and pagination of Article records
# @see https://github.com/jbox-web/ajax-datatables-rails
class BaseDatatable < AjaxDatatablesRails::ActiveRecord
  extend Forwardable

  def_delegators :@view, :render, :link_to, :concat, :content_tag
  attr_reader :model_class, :view

  def initialize(params, opts = {})
    @model_class = opts.delete(:model_class)

    if @model_class.nil?
      model_name = opts.delete(:model_name)
      @model_class = model_name.to_s.classify.constantize if model_name
    end
    @view = opts[:view_context]
    super
  end

  def view_columns
    @view_columns ||= model_class&.visible_datatable_columns&.transform_values do |config|
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
      column_data = format_columns(record)
      row_data = format_row_attributes(record)
      column_data.merge(
        DT_RowData: record.id,
        row_attributes: row_data
      )
    end
  end

  # Retrieve the base ActiveRecord scope for the datatable
  # @return [ActiveRecord::Relation] Base query with necessary includes
  def get_raw_records
    model_class&.for_datatable
  end

  private

  def format_columns(record)
    model_class&.datatable_columns&.transform_values { |config| config[:formatter].call(record) }
  end

  def format_row_attributes(record)
    attrs = model_class&.row_attributes_for(record)
    return {} unless attrs

    stringify_attributes(attrs).compact.to_json
  end

  def stringify_attributes(hash)
    hash.transform_keys(&:to_s).transform_values do |v|
      v.is_a?(Hash) ? v.transform_keys(&:to_s) : v
    end
  end
end
