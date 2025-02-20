# frozen_string_literal: true

# Presenter for Tags
class TagPresenter < ApplicationPresenter
  attr_reader :tag

  def initialize(tag)
    @tag = tag
  end

  def controls
    safe_join([
                content_tag(:button,
                            content_tag(:span, '', class: 'glyphicon glyphicon-pencil'),
                            type: 'button',
                            class: 'btn btn-default btn-xs',
                            data: {
                              toggle: 'modal',
                              target: "#tag-#{tag.id}"
                            }),
                link_to(
                  content_tag(:span, '', class: 'glyphicon glyphicon-remove'),
                  "/admin/tags/#{tag.id}",
                  class: 'btn btn-danger btn-xs',
                  method: :delete,
                  data: { confirm: 'Are you sure?' }
                )
              ])
  end
end
