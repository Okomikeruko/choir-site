class SongsController < ApplicationController
  def index
    @grouped_songs = Song.all.group_by(&:performance_date)
  end
end
