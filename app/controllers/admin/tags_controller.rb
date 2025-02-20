# frozen_string_literal: true

module Admin
  # Controller for managing tags in the admin section.
  class TagsController < AdminController
    datatable_model Tag
    before_action :find_all_tags
    before_action :find_new_tag, except: [:create]
    before_action :find_tag, only: %i[update destroy]

    def index
      respond_with_datatable
    end

    def create
      @new_tag = Tag.new(tag_params)
      if @new_tag.save
        flash[:success] = t '.success'
        redirect_to admin_tags_path
      else
        render 'index'
      end
    end

    def update
      if @tag.update(tag_params)
        flash[:success] = t '.success'
      else
        flash[:danger] = t '.error'
      end
      redirect_to admin_tags_path
    end

    def destroy
      @tag.destroy
      redirect_to admin_tags_path
    end

    private

    def tag_params
      params.require(:tag).permit(:name, :slug)
    end

    def find_tag
      @tag = Tag.find params[:id]
    end

    def find_new_tag
      @new_tag = Tag.new
    end

    def find_all_tags
      @tags = Tag.all
    end
  end
end
