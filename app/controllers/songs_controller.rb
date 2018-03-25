class SongsController < ApplicationController
  add_breadcrumb "Home", :root_path
  add_breadcrumb "Music", :music_index_path
  
  
  def index
    songs = Song.includes(:performances).all 
    @songs_by_title = songs.sort_by {|s| s.sort_order}
                           .group_by {|s| s.sort_order.chr}
    @songs_pending  = songs.select { |s| s.performances.any? }
                           .select { |s| !s.performances.last.date.past? }
                           .sort_by {|s| s.performances.last.date}
                           .group_by {|s| s.performances.last.date.beginning_of_month}
                           .group_by {|d| d[0].year}
    @song_history   = songs.select { |s| s.performances.any? }
                           .select { |s| s.performances.last.date.past? }
                           .sort_by {|s| s.performances.last.date}
                           .reverse!
                           .group_by {|s| s.performances.last.date.beginning_of_month}
                           .group_by {|d| d[0].year}
  end

  
  def show
    @song = Song.includes(:instruments, 
                          :rehearsals, 
                          :performances)
                .find_by(:slug => params[:slug])
                
    
    add_breadcrumb @song.title, music_path(@song.slug)
  end
end
