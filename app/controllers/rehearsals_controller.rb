# frozen_string_literal: true

# Controller for managing rehearsals.
class RehearsalsController < ApplicationController
  add_breadcrumb 'Home', :root_path
  add_breadcrumb 'Rehearsals', :rehearsals_path

  def index
    @pagy, @rehearsals = pagy(Rehearsal.includes(:songs).all_past)
  end
end
