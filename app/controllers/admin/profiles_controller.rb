# frozen_string_literal: true

module Admin
  # Controller for managing profiles in the admin section.
  class ProfilesController < AdminController
    before_action :set_profile, only: %i[edit update destroy]

    def index
      @profiles = Profile.all
    end

    def new
      @profile = Profile.new
    end

    def create
      @profile = Profile.new(profile_params)
      if @profile.save
        flash[:success] = 'Profile created successfully.'
        redirect_to admin_profiles_path
      else
        render 'new'
      end
    end

    def edit; end

    def update
      if @profile.update(profile_params)
        flash[:success] = 'Profile updated successfully.'
        redirect_to admin_profiles_path
      else
        render 'edit'
      end
    end

    def destroy
      @profile.destroy
      redirect_to admin_profiles_path
    end

    def sort
      params[:order].each_value do |value|
        Profile.find(value[:id]).update_attribute(:position, value[:position])
      end
    end

    private

    def set_profile
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
