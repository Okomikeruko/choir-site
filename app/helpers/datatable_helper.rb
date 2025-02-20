# frozen_string_literal: true

# Helper for rendering custom DataTable cells
module DatatableHelper
  include Rails.application.routes.url_helpers
  include ActionView::Helpers::TagHelper
  include ActionView::Helpers::SanitizeHelper

  def datatable_table_for(model_class)
    content_tag :table,
                class: 'table table-hover',
                id: "#{model_class.name.downcase.pluralize}-datatable",
                data: { columns: model_class.javascript_column_config.to_json,
                        source: url_for([:admin, model_class, { format: :json }]),
                        order: model_class.initial_sort_order,
                        buttons: model_class.javascript_buttons_config.to_json } do
      safe_join(
        [
          content_tag(:thead) do
            content_tag(:tr) do
              sanitize datatable_headers_for(model_class),
                       tags: ['th'],
                       attributes: ['class']
            end
          end,
          content_tag(:tbody, '')
        ]
      ) # end safe_join
    end
  end

  def datatable_headers_for(model_class)
    output = model_class.visible_datatable_columns.values.map do |col|
      content_tag(:th, col[:label], class: col[:className].presence)
    end
    safe_join output
  end

  def controls_html(record)
    renderer ||= ApplicationController.renderer
    renderer.render(
      partial: 'admin/shared/controls',
      locals: { record: record },
      format: :html
    )
  end
end
