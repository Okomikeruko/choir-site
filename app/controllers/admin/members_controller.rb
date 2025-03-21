# frozen_string_literal: true

module Admin
  # Controller for managing members in the admin section.
  class MembersController < AdminController
    before_action :find_member, only: %i[edit update destroy]

    datatable_model Member

    def index
      respond_with_datatable
    end

    def new
      @member = Member.new(vocal_range: [])
    end

    def edit; end

    def create
      @member = Member.new(member_params)
      if @member.save
        flash[:success] = t '.success'
        redirect_to admin_members_path
      else
        render 'new'
      end
    end

    def update
      if @member.update(member_params)
        flash[:success] = t '.success'
        redirect_to admin_members_path
      else
        render 'edit'
      end
    end

    def destroy
      @member.destroy
      redirect_to admin_members_path
    end

    private

    def member_params
      params.require(:member).permit(:name,
                                     :email,
                                     :phone,
                                     :talents,
                                     { vocal_range: [] })
    end

    def find_member
      @member = Member.find(params[:id])
    end
  end
end
