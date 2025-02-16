# frozen_string_literal: true

module Admin
  # Controller for managing categories in the admin section.
  class CategoriesController < AdminController
    before_action :find_all_categories
    before_action :find_new_category, except: [:create]
    before_action :find_category, only: %i[update destroy]

    def index
      respond_to do |format|
        format.html
        format.json do
          render json: BaseDatatable.new(params,
                                         model_class: Category,
                                         view_context: view_context)
        end
      end
    end

    def create
      @new_category = Category.new(category_params)
      if @new_category.save
        flash[:success] = t '.success'
        redirect_to admin_categories_path
      else
        render 'index'
      end
    end

    def update
      if @category.update(category_params)
        flash[:success] = t '.success'
      else
        flash[:danger] = t '.error'
      end
      redirect_to admin_categories_path
    end

    def destroy
      @category.destroy
      redirect_to admin_categories_path
    end

    private

    def category_params
      params.require(:category).permit(:name, :slug)
    end

    def find_category
      @category = Category.find params[:id]
    end

    def find_new_category
      @new_category = Category.new
    end

    def find_all_categories
      @categories = Category.all
    end
  end
end
