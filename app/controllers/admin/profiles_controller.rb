# frozen_string_literal: true

module Admin
  # Controller for managing profiles in the admin section.
  class ProfilesController < AdminController
    before_action :find_profile, only: %i[edit update destroy]

    # GET /admin/profiles
    def index
      @profiles = Profile.all
    end

    # GET /admin/profiles/new
    def new
      @profile = Profile.new
    end

    # GET /admin/profiles/[:id]/edit
    def edit; end

    # POST /admin/profiles
    def create
      @profile = Profile.new(profile_params)
      if @profile.save
        flash[:success] = t '.success'
        redirect_to admin_profiles_path
      else
        render 'new'
      end
    end

    # PATCH/PUT /admin/profiles/[:id]
    def update
      if @profile.update(profile_params)
        flash[:success] = t '.success'
        redirect_to admin_profiles_path
      else
        render 'edit'
      end
    end

    # DELETE /admin/profiles/[:id]
    def destroy
      @profile.destroy
      redirect_to admin_profiles_path
    end

    # POST /admin/profiles/sort
    def sort
      # Collect the ids of each profile
      profile_ids = params[:order].pluck(:id)

      # Retrieve all profiles in a single query
      profiles = Profile.where(id: profile_ids).index_by(&:id)

      # Update each profile's position
      params[:order].each_value do |value|
        profile = profiles[value[:id].to_i]
        profile&.update(:position, value[:position])
      end
    end

    private

    def find_profile
      @profile = Profile.find params[:id]
    end

    def profile_params
      params.require(:profile).permit(:name,
                                      :title,
                                      :bio,
                                      :image)
    end
  end
end
