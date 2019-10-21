class SongsController < ApplicationController
  add_breadcrumb "Home", :root_path
  add_breadcrumb "Music", :music_index_path
  
  
  def index
    songs = Song.includes(:performances).all 
    @songs_by_title = songs.sort_by {|s| s.sort_order}
                           .group_by {|s| s.sort_order.chr}
    @songs_pending  = Performance.all_upcoming
                        .group_by {|per| per.date.beginning_of_month}
                        .group_by {|m| m[0].year}
    @song_history   = Performance.all_history
                        .group_by {|per| per.date.beginning_of_month}
                        .group_by {|m| m[0].year}
    @songs_unused   = songs.unused 
                           .sort_by {|s| s.sort_order}
                           .group_by {|s| s.sort_order.chr}
  end

  
  def show
    @song = Song.includes(:instruments, 
                          :rehearsals, 
                          :performances)
                .find_by(:slug => params[:slug])
                
    add_breadcrumb @song.title, music_path(@song.slug)
  end
end
