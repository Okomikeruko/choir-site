# frozen_string_literal: true

module Admin
  # Controller for managing rehearsals in the admin section.
  class RehearsalsController < AdminController
    before_action :find_rehearsal, only: %i[edit update destroy]

    def index
      @rehearsals = Rehearsal.all
                             .paginate(page: params[:page], per_page: 20)
    end

    def new
      @rehearsal = Rehearsal.new
    end

    def create
      @rehearsal = Rehearsal.new(rehearsal_params)
      if @rehearsal.save
        flash[:success] = 'Rehearsal created successfully.'
        redirect_to admin_rehearsals_path
      else
        render 'new'
      end
    end

    def edit; end

    def update
      if @rehearsal.update(rehearsal_params)
        flash[:success] = 'Rehearsal updated successfully.'
        redirect_to admin_rehearsals_path
      else
        render 'edit'
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
                                        song_ids: [])
    end

    def find_rehearsal
      @rehearsal = Rehearsal.find params[:id]
    end
  end
end
