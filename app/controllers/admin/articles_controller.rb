# frozen_string_literal: true

module Admin
  # Controller for managing articles in the admin section.
  class ArticlesController < AdminController
    before_action :find_article, only: %i[edit update destroy]

    datatable_model Article

    def index
      respond_with_datatable
    end

    def new
      @article = Article.new
    end

    def edit; end

    def create
      @article = Article.new(article_params)
      @article.published = %w[Publish Update].include? params[:commit]
      if @article.save
        flash[:success] = t '.success'
        redirect_to edit_admin_article_path(@article)
      else
        render 'new'
      end
    end

    def update
      @article.published = %w[Publish Update].include? params[:commit]
      if @article.update(article_params)
        flash[:success] = t '.success'
        redirect_to edit_admin_article_path(@article)
      else
        render 'edit'
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
                                      category_ids: [],
                                      tag_ids: [])
    end

    def find_article
      @article = Article.find(params[:id])
    end
  end
end
