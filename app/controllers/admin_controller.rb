class AdminController < ApplicationController
  layout "admin"
  before_action :authenticate_user!
  
  def index
    @articles = Article.first(3)
    @songs    = Song.last(5).reverse!
    @performances = Performance.last(5).reverse!
    @rehearsals = Rehearsal.last(3) 
  end
end
