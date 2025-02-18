# frozen_string_literal: true

# Model concern for populating DataTable columns.
module DatatableColumnsConcern
  extend ActiveSupport::Concern

  class_methods do
    def for_datatable
      all.unscoped
    end

    def helpers
      helper = ActionController::Base.helpers
      helper.extend(DatatableHelper)
      helper
    end

    def datatable_columns
      @datatable_columns ||= {}
    end

    def visible_datatable_columns
      datatable_columns.select { |_, v| v[:visible] }
    end

    def define_datatable_column(name, options = {})
      defaults = {
        visible: true,
        source: "#{self.name}.#{name}",
        label: name.to_s.titleize,
        searchable: true,
        sortable: true,
        orderable: true,
        sort_order: nil,
        sort_priority: nil,
        formatter: ->(record) { record.send(name) }
      }

      datatable_columns[name] = defaults.merge(options)
    end

    def initial_sort_order
      sort_columns = datatable_columns
        .select { |_, v| v[:sort_priority].present? }
        .sort_by { |_, v| v[:sort_priority] }
        .map do |key, config|
        [
          datatable_columns.keys.index(key),
          config[:sort_order] || 'asc'
        ]
      end

      sort_columns.presence || [[0, 'asc']]
    end

    def define_controls_column(options = {})
      defaults = {
        source: nil,
        label: 'Controls',
        searchable: false,
        sortable: false,
        orderable: false,
        className: 'text-right',
        formatter: ->(_) {}
      }

      datatable_columns[:controls] = defaults.merge(options)
    end

    def define_row_attributes(options = {})
      @row_attributes = options.compact
    end

    def row_attributes_for(record)
      return {} unless @row_attributes

      @row_attributes.transform_values do |value|
        if value.is_a?(Proc)
          begin
            value.call(record)
          rescue ArgumentError
            value.call
          end
        else
          value
        end
      end
    end

    def javascript_column_config
      visible_datatable_columns.map do |key, config|
        {
          data: key.to_s,
          searchable: config[:searchable] != false,
          orderable: config[:sortable] != false && config[:orderable] != false,
          className: config[:className]
        }.compact
      end
    end
  end
end
