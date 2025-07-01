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

  def unread_message_badge
    return unless Message.any_unread?

    content_tag(:span, Message.unread, class: 'badge rounded-pill text-bg-danger')
  end
end
