# frozen_string_literal: true

module DatatableColumnsConcern
  extend ActiveSupport::Concern

  class_methods do
    def for_datatable
      all
    end
    
    def helpers
      helper = ActionController::Base.helpers
      helper.extend(DatatableHelper)
      helper
    end
    
    def datatable_columns
      @datatable_columns ||= {}
    end
    
    def define_datatable_column(name, options = {})
      defaults = {
        source: "#{self.name}.#{name}",
        label: name.to_s.titleize,
        searchable: true,
        sortable: true,
        orderable: true,
        formatter: ->(record) { record.send(name) }
      }
      
      datatable_columns[name] = defaults.merge(options)
    end

    def define_controls_column(options = {})
      defaults = {
        source: nil,
        label: 'Controls',
        searchable: false,
        sortable: false,
        orderable: false,
        className: 'text-right',
        formatter: ->(_) { nil }
      }

      datatable_columns[:controls] = defaults.merge(options)
    end
    
    def javascript_column_config
      datatable_columns.map do |key, config |
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