# frozen_string_literal: true

# Controller for managing articles.
class ArticlesController < ApplicationController
  before_action :fetch_sorters

  add_breadcrumb 'Home', :root_path
  add_breadcrumb 'News', :news_index_path

  def index
    @pagy, @articles = pagy(Article.includes(:author).published.filtered(params), limit: 8)
  end

  def show
    @article = Article.find(params[:id])
    add_breadcrumb @article.title, news_path(@article)
  end

  private

  def fetch_sorters
    @months = Article.as_months
    @tags = Tag.all
    @categories = Category.all
  end
end
