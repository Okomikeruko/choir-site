class SongsController < ApplicationController
  add_breadcrumb "Home", :root_path
  add_breadcrumb "Music", :music_index_path
  
  
  def index
    
    @songs_by_year = Song.all
                         .group_by {|s| s.performance_date}
                         .group_by {|d| d[0].year}
  end
end
