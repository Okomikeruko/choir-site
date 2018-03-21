class SongsController < ApplicationController
  add_breadcrumb "Home", :root_path
  add_breadcrumb "Music", :music_index_path
  
  
  def index
    @songs = Song.all 
    @songs_by_title = @songs.sort_by {|s| s.sort_order}
                            .group_by {|s| s.sort_order.chr}
    @songs_pending = @songs.where("performance_date > :d", :d => DateTime.now)
                           .sort_by {|s| s.performance_date}
                           .group_by {|s| s.performance_date}
                           .group_by {|d| d[0].year}
    @song_history = @songs.where("performance_date <= :d", :d => DateTime.now)
                           .sort_by {|s| s.performance_date}
                           .reverse!
                           .group_by {|s| s.performance_date}
                           .group_by {|d| d[0].year}
    
    @songs_by_year = Song.all
                         .group_by {|s| s.performance_date}
                         .group_by {|d| d[0].year}
  end
end
