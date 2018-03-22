class StaticPagesController < ApplicationController
  
  def home
    @song = Song.where("performance_date > :date", :date => DateTime.now).first
  end
  
  def about_us
    add_breadcrumb "Home", root_url
    add_breadcrumb "About Us", about_us_path 
  end
  
end
