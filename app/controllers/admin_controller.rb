class AdminController < ApplicationController
  layout "admin"
  before_action :authenticate_user!
  
  def index
    @articles     = Article.first(3)
    @performances = Performance.all_upcoming
    @rehearsals   = Rehearsal.first(5) 
    @songs        = Song.all.order(:created_at => :desc).first(5)
  end
end
