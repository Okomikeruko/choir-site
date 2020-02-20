class StaticPagesController < ApplicationController

  def home
    @performances   = Performance.get_next 2
    @last_rehearsal = Rehearsal.get_most_recent
    @next_rehearsal = Rehearsal.get_next
    @articles       = Article.first 3
  end

  def about_us
    add_breadcrumb "Home", root_url
    add_breadcrumb "About Us", about_us_path
    @profiles = Profile.all
  end
end