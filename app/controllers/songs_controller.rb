# frozen_string_literal: true

# Controller for managing songs.
class SongsController < ApplicationController
  add_breadcrumb 'Home', :root_path
  add_breadcrumb 'Music', :music_index_path

  def index
    load_songs
    load_songs_pending
    load_songs_history
    load_songs_unused
  end

  def show
    @song = Song.includes(:instruments,
                          :rehearsals,
                          :performances)
                .find_by(slug: params[:slug])
    add_breadcrumb @song.title, music_path(@song.slug)
  end

  private

  def load_songs
    songs = Song.includes(:performances).all
    @songs_by_title = group_songs_by_title(songs)
  end

  def group_songs_by_title(songs)
    songs.sort_by(&:sort_order)
         .group_by { |s| s.sort_order.chr }
  end

  def load_songs_pending
    @songs_pending = group_performances_by_month(Performance.all_upcoming)
  end

  def load_songs_history
    @song_history = group_performances_by_month(Performance.all_history)
  end

  def group_performances_by_month(performances)
    performances.group_by { |per| per.date.beginning_of_month }
                .group_by { |m| m[0].year }
  end

  def load_songs_unused
    @songs_unused = group_songs_by_title(Song.unused)
  end
end
