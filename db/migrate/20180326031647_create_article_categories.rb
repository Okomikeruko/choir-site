# frozen_string_literal: true

class CreateArticleCategories < ActiveRecord::Migration[5.1]
  def change
    create_table :article_categories do |t|
      t.references :article, foreign_key: true
      t.references :category, foreign_key: true

      t.timestamps
    end
  end
end
