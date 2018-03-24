class StaticPagesController < ApplicationController
  
  def home
    @song = Song.where("performance_date > :date", :date => DateTime.now).first
    @instrument = @song.instruments.detect {|i| i.mp3.exists? } unless @song.blank?
  end
  
  def about_us
    add_breadcrumb "Home", root_url
    add_breadcrumb "About Us", about_us_path 
    
    @profiles = Profile.all
  end
  
end
