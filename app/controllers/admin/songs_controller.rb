# frozen_string_literal: true

module Admin
  # Controller for managing songs in the admin section.
  class SongsController < AdminController
    before_action :set_song, only: %i[edit update destroy]

    def index
      @songs = Song.all
    end

    def new
      @song = Song.new
    end

    def create
      @song = Song.new(song_params)
      if @song.save
        flash[:success] = 'Song added successfully.'
        redirect_to edit_admin_song_path(@song)
      else
        flash[:danger] = 'There was an error creating the song.'
        render 'new'
      end
    end

    def edit; end

    def update
      if @song.update(song_params)
        flash[:success] = 'Song updated successfully.'
        redirect_to edit_admin_song_path(@song)
      else
        flash[:danger] = 'There was an error updating the song.'
        render 'edit'
      end
    end

    def destroy
      @song.destroy
      redirect_to admin_songs_path
    end

    private

    def set_song
      @song = Song.find(params[:id])
    end

    def song_params
      params.require(:song).permit(:title,
                                   :description,
                                   :lilypond,
                                   instruments_attributes: %i[id
                                                              name
                                                              position
                                                              midi
                                                              mp3
                                                              pdf
                                                              _destroy])
    end
  end
end
