# frozen_string_literal: true

# Controller for managing articles.
class ArticlesController < ApplicationController
  add_breadcrumb 'Home', :root_path
  add_breadcrumb 'News', :news_index_path

  def index
    @articles = Article.published
                       .filtered(params)
                       .paginate(page: params[:page], per_page: 8)
  end

  def show
    @article = Article.find params[:id]
    add_breadcrumb @article.title, news_path(@article)
  end
end
