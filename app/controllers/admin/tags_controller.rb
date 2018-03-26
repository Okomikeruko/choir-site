class Admin::TagsController < AdminController
  before_action :get_all_tags 
  before_action :get_new_tag, except: [:create]
  before_action :get_tag, only: [:update, :destroy]

  def index
  end
  
  def create
    @new_tag = Tag.new(tag_params)
    if @new_tag.save
      flash[:success] = "Tag created successfully."
      redirect_to admin_tags_path
    else
      render "index"
    end
  end
  
  def update
    if @tag.update_attributes(tag_params)
      flash[:success] = "Tag updated successfully."
    else
      flash[:danger] = "Something went wrong. The Tag was not updated."
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
    
    def get_tag
      @tag = Tag.find params[:id]
    end
    
    def get_new_tag
      @new_tag = Tag.new
    end
    
    def get_all_tags
      @tags = Tag.all
    end
end
