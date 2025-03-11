# frozen_string_literal: true

# Controller for managing articles.
class ArticlesController < ApplicationController
  add_breadcrumb 'Home', :root_path
  add_breadcrumb 'News', :news_index_path

  def index
    @articles = Article.published
                       .filtered(params)
  end

  def show
    @article = Article.find(params[:id])
    add_breadcrumb @article.title, news_path(@article)
  end
end
