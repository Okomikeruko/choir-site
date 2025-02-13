# frozen_string_literal: true

module DatatableHelper
  include Rails.application.routes.url_helpers
  def datatable_headers_for(model_class)
    model_class.datatable_columns.values.map do |col|
      content_tag(:th, col[:label], class: col[:className])
    end.join.html_safe
  end

  def controls_html(record)
    ApplicationController.renderer.render(
      partial: 'admin/shared/controls',
      locals: { record: record },
      format: :html
    )
  end

  def vocal_range(record)
    [
      { part: "S", bool: record.soprano? },
      { part: "A", bool: record.alto?    },
      { part: "T", bool: record.tenor?   },
      { part: "B", bool: record.bass?    },
    ].map do |voice|
      content_tag(:span, voice[:part], class: "label label-#{voice[:bool] ? 'success' : 'default'}")
    end.join.html_safe
  end
end