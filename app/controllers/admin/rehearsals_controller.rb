class Admin::RehearsalsController < AdminController
  before_action :get_rehearsal, only: [:edit, :update, :destroy]
  
  def index
    @rehearsals = Rehearsal.all
  end

  def new
    @rehearsal = Rehearsal.new 
  end
  
  def create
    @rehearsal = Rehearsal.new(rehearsal_params)
    if @rehearsal.save 
      flash[:success] = "Rehearsal created successfully."
      redirect_to admin_rehearsals_path
    else
      render "new"
    end
  end

  def edit
  end
  
  def update
    if @rehearsal.update_attributes(rehearsal_params)
      flash[:success] = "Rehearsal updated successfully."
      redirect_to admin_rehearsals_path
    else
      render "edit"
    end
  end
  
  def destroy
    @rehearsal.destroy
    redirect_to admin_rehearsals_path
  end
  
  private
    def rehearsal_params
      params.require(:rehearsal).permit(:host,
                                        :venue,
                                        :date_holder,
                                        :time,
                                        :audio,
                                        :song_ids => []) 
    end
    
    def get_rehearsal
      @rehearsal = Rehearsal.find params[:id]
    end
end
