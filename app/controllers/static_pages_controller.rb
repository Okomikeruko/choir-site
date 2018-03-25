class StaticPagesController < ApplicationController
  
  def home
    @performance    = Performance.get_next
    @last_rehearsal = Rehearsal.get_most_recent
    @next_rehearsal = Rehearsal.get_next
  end
  
  def about_us
    add_breadcrumb "Home", root_url
    add_breadcrumb "About Us", about_us_path 
    
    @profiles = Profile.all
  end
  
end
