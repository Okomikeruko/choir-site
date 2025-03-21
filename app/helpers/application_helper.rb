# frozen_string_literal: true

# Module for helpers across the application.
module ApplicationHelper
  include Pagy::Frontend

  def rehearsal_song_list(rehearsal)
    return '' unless rehearsal.songs.any?

    song_links = rehearsal.songs.map do |song|
      link_to(song.title, music_path(song.slug))
    end

    safe_join(song_links, ', ')
  end
end
