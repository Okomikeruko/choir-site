class Admin::ArticlesController < AdminController
  before_action :get_article, only: [:edit, :update, :destroy]
  
  def index
    @articles = Article.all
  end

  def new
    @article = Article.new
  end
  
  def create
    @article = Article.new(article_params)
    @article.published = ["Publish", "Update"].include? params[:commit]
    if @article.save 
      flash[:success] = "Article created successfully."
      redirect_to edit_admin_article_path(@article)
    else
      render "new"
    end
  end

  def edit
  end
  
  def update
    @article.published = ["Publish", "Update"].include? params[:commit]
    if @article.update_attributes(article_params)
      flash[:success] = "Article updated successfully."
      redirect_to edit_admin_article_path(@article)
    else
      render "edit"
    end
  end
  
  def destroy
    @article.destroy
    redirect_to admin_articles_path
  end
  
  private 
    def article_params
      params.require(:article).permit(:title, 
                                      :content, 
                                      :user_id, 
                                      :category_ids => [],
                                      :tag_ids => [])
    end
    
    def get_article 
      @article = Article.find params[:id]
    end
end
