# frozen_string_literal: true

# Presenter for Members
class MemberPresenter < ApplicationPresenter
  def initialize(member)
    @member = member
  end

  def vocal_range
    output = vocal_parts.map do |voice|
      content_tag(:span, voice[:part], class: "label label-#{voice[:bool] ? 'success' : 'default'}")
    end

    safe_join(output)
  end

  private

  def vocal_parts
    [
      { part: 'S', bool: @member.soprano? },
      { part: 'A', bool: @member.alto?    },
      { part: 'T', bool: @member.tenor?   },
      { part: 'B', bool: @member.bass?    }
    ]
  end
end
