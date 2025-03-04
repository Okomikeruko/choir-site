# frozen_string_literal: true

# Model concern for populating DataTable columns.
module DatatableColumnsConcern
  extend ActiveSupport::Concern

  BASE_COLUMN_DEFAULTS = {
    className: nil,
    label: nil,
    orderable: false,
    searchable: false,
    sortable: false,
    sortPriority: nil,
    sortOrder: nil,
    source: nil,
    visible: true,

    formatter: ->(_) { '' }
  }.freeze

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

    def table_buttons
      @table_buttons ||= []
    end

    def define_table_buttons(buttons)
      @table_buttons = buttons.map { |b| b.to_s.camelize(:lower) }
    end

    def visible_datatable_columns
      datatable_columns.select { |_, v| v[:visible] }
    end

    def define_datatable_column(name, options = {})
      defaults = BASE_COLUMN_DEFAULTS.merge({
                                              source: "#{self.name}.#{name}",
                                              label: name.to_s.titleize,
                                              searchable: true,
                                              sortable: true,
                                              orderable: true,
                                              formatter: ->(record) { record.send(name) }
                                            })

      datatable_columns[name] = defaults.merge(options)
    end

    def initial_sort_order
      sort_columns = datatable_columns
                     .select { |_, v| v[:sortPriority].present? }
                     .sort_by { |_, v| v[:sortPriority] }
                     .map do |key, config|
        [
          datatable_columns.keys.index(key),
          config[:sortOrder] || 'asc'
        ]
      end

      sort_columns.presence || [[0, 'asc']]
    end

    def define_select_column(options = {})
      defaults = BASE_COLUMN_DEFAULTS.merge({
                                              label: '',
                                              className: 'select-checkbox '
                                            })

      datatable_columns[:select] = defaults.merge(options)
    end

    def define_controls_column(options = {})
      defaults = BASE_COLUMN_DEFAULTS.merge({
                                              label: 'Controls',
                                              className: 'text-end'
                                            })

      datatable_columns[:controls] = defaults.merge(options)
    end

    def define_row_attributes(options = {})
      @row_attributes = options.compact
    end

    def row_attributes_for(record)
      return {} unless @row_attributes

      @row_attributes.transform_values do |value|
        if value.is_a?(Proc)
          value.call(record)
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

    def javascript_buttons_config
      table_buttons
    end
  end
end
