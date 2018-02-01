class SongsController < ApplicationController
  def index
    @current_year = params[:year].to_i || DateTime.now.year
    
    @years = Song.all.map{|i| i.performance_date.year }.uniq
    
    case ActiveRecord::Base.connection.adapter_name 
    when "SQLite"
      sorter = "cast(strftime('%Y', performance_date) as int) = ?"
    when "PostgreSQL"
      sorter = "extract(year from performance_date) = ?"
    end
    
    @grouped_songs = Song.where(sorter, @current_year)
                         .group_by(&:performance_date)
  end
end
