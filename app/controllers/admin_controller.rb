# frozen_string_literal: true

# Controller for managing admin.
class AdminController < ApplicationController
  include AdminDatatableConcern

  layout 'admin'
  before_action :authenticate_user!

  def index
    @articles     = Article.first(3)
    @performances = Performance.all_upcoming
    @rehearsals   = Rehearsal.last(5)
    @songs        = Song.includes([:instruments]).order(created_at: :desc).first(5)
  end
end
