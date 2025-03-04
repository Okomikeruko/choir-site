# frozen_string_literal: true

# Presenter for Categories
class CategoryPresenter < ApplicationPresenter
  attr_reader :category

  def initialize(category)
    @category = category
  end

  def controls
    safe_join([
                content_tag(:button,
                            content_tag(:span, '', class: 'glyphicon glyphicon-pencil'),
                            type: 'button',
                            class: 'btn btn-outline-secondary btn-xs',
                            data: {
                              toggle: 'modal',
                              target: "#category_#{category.id}"
                            }),
                link_to(
                  content_tag(:span, '', class: 'glyphicon glyphicon-remove'),
                  "/admin/categories/#{category.id}",
                  class: 'btn btn-danger btn-xs',
                  method: :delete,
                  data: { confirm: 'Are you sure?' }
                )
              ])
  end
end
