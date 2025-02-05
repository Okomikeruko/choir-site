# frozen_string_literal: true

# Controller for managing rehearsals.
class RehearsalsController < ApplicationController
  add_breadcrumb 'Home', :root_path
  add_breadcrumb 'Rehearsals', :rehearsals_path

  def index
    @rehearsals = Rehearsal.includes(:songs)
                           .all_past
                           .paginate(page: params[:page], per_page: 12)
  end
end
