class Admin::PerformancesController < AdminController
  before_action :set_performance, only: [:edit, :update, :destroy]
  
  def index
    @performances = Performance.all
  end

  def new
    @performance = Performance.new
  end
  
  def create
    @performance = Performance.new(performance_params)
    @performance.date = Date.strptime(params[:performance][:date], "%m/%d/%Y")
                            .end_of_day
                            .in_time_zone("Mountain Time (US & Canada)")
    if @performance.save 
      flash[:success] = "Performance created successfully."
      redirect_to admin_performances_path
    else
      render "new"
    end
  end

  def edit
  end
  
  def update
    @performance.date = Date.strptime(params[:performance][:date], "%m/%d/%Y")
                            .end_of_day
                            .in_time_zone("Mountain Time (US & Canada)")
    if @performance.update_attributes(performance_params)
      flash[:success] = "Peformance updated successfully."
      redirect_to admin_performances_path
    else
      render "edit"
    end
  end
  
  def destroy
    @performance.destroy
    redirect_to admin_performances_path
  end
  
  private
    def performance_params
      params.require(:performance).permit(:venue,
                                          :details,
                                          :song_ids => [])
    end
    
    def set_performance
      @performance = Performance.find params[:id]
    end
end
