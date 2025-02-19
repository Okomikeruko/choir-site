# frozen_string_literal: true

module AdminDatatableConcern
  extend ActiveSupport::Concern

  class_methods do
    def datatable_model(model_class)
      define_method(:datatable_model) { model_class }
    end
  end

  def respond_with_datatable
    respond_to do |format|
      format.html
      format.json do
        render json: BaseDatatable.new(
          params,
          model_class: datatable_model,
          view_context: view_context
        )
      end
    end
  end
end
