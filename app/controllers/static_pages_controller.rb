# frozen_string_literal: true

# Controller for managing static pages
class StaticPagesController < ApplicationController
  def home
    @performances   = Performance.find_next 2
    @last_rehearsal = Rehearsal.find_most_recent
    @next_rehearsal = Rehearsal.find_next
    @articles       = Article.published.first 3
  end
end
