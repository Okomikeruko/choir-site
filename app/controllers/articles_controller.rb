class ArticlesController < ApplicationController
  add_breadcrumb "Home", :root_path
  add_breadcrumb "News", :news_index_path
  
  def index
    @articles = Article.published
    @articles = @articles.month(params[:month])         if params[:month].present?
    @articles = @articles.tag(params[:tags])            if params[:tags].present?
    @articles = @articles.category(params[:categories]) if params[:categories].present?
    @articles = @articles.paginate(page: params[:page], per_page: 8 )
  end

  def show
    @article = Article.find params[:id]
    add_breadcrumb @article.title, news_path(@article)
  end
end
