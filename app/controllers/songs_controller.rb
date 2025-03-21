# frozen_string_literal: true

# Controller for managing songs.
class SongsController < ApplicationController
  add_breadcrumb 'Home', :root_path
  add_breadcrumb 'Music', :music_index_path

  def index
    @songs_by_title = Song.alphabetized
    @unused_songs = Song.unused.alphabetized
    @pending_performances = Performance.all_upcoming.group_by_month_and_year
    @performance_history  = Performance.all_history.group_by_month_and_year
  end

  def show
    @song = Song.for_display.find_by(slug: params[:slug])
    add_breadcrumb @song.title, music_path(@song.slug)
  end
end
