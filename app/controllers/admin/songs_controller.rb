class Admin::SongsController < AdminController
  def index
  
  end
  
  def new 
    @song = Song.new
  end
  
  def create
    @song = Song.new(song_params)
    if @song.save
      flash[:success] = "Song added successfully."
      redirect_to admin_songs_path
    else
      flash[:danger] = "There was an error creating the song."
      render 'new'
    end
  end
  
  private
    def song_params
      params.require(:song).permit(:title,
                                   :performance_date)
    end
end
