class SongsController < ApplicationController
  def index
    @current_year = params[:year].to_i || DateTime.now.year
    
    @years = Song.all.map{|i| i.performance_date.year }.uniq
    
    @grouped_songs = Song.where("cast(strftime('%Y', performance_date) as int) = ?", @current_year)
                         .group_by(&:performance_date)
  end
end
