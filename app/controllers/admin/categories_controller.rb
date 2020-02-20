class Admin::CategoriesController < AdminController
  before_action :get_all_categories
  before_action :get_new_category, except: [:create]
  before_action :get_category, only: [:update, :destroy]

  def index
  end

  def create
    @new_category = Category.new(category_params)
    if @new_category.save
      flash[:success] = "Category created successfully."
      redirect_to admin_categories_path
    else
      render "index"
    end
  end

  def update
    if @category.update_attributes(category_params)
      flash[:success] = "Categoru updated successfully."
    else
      flash[:danger] = "Something went wrong. The Category was not updated."
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

    def get_category
      @category = Category.find params[:id]
    end

    def get_new_category
      @new_category = Category.new
    end

    def get_all_categories
      @categories = Category.all
    end
end