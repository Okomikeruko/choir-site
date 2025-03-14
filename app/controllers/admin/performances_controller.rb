# frozen_string_literal: true

module Admin
  # Controller for managing performances in the admin section.
  class PerformancesController < AdminController
    before_action :set_performance, only: %i[edit update destroy]

    datatable_model Performance

    def index
      respond_with_datatable
    end

    def new
      @performance = Performance.new
    end

    def edit; end

    def create
      @performance = Performance.new(**performance_params)
      if @performance.save
        flash[:success] = t '.success'
        redirect_to admin_performances_path
      else
        render 'new'
      end
    end

    def update
      if @performance.update(**performance_params)
        flash[:success] = t '.success'
        redirect_to admin_performances_path
      else
        render 'edit'
      end
    end

    def destroy
      @performance.destroy
      redirect_to admin_performances_path
    end

    private

    def performance_params
      processed_params = params.require(:performance).permit(:venue, :details, :audio, song_ids: [])

      if params[:performance][:date].present?
        processed_params[:date] = Time.zone.strptime(params[:performance][:date], '%m/%d/%Y').end_of_day
      end

      processed_params
    end

    def set_performance
      @performance = Performance.find(params[:id])
    end
  end
end
