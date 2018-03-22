class StaticPagesController < ApplicationController
  def about_us
    add_breadcrumb "Home", root_url
    add_breadcrumb "About Us", about_us_path 
  end
  
end
