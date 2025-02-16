# frozen_string_literal: true

class AddArticleCountToCategories < ActiveRecord::Migration[6.1]
  def up
    add_column :categories, :articles_count, :integer, default: 0

    execute <<-SQL.squish
        UPDATE categories
        SET articles_count = (
            SELECT count(*)
            FROM article_categories
            WHERE article_categories.category_id = categories.id
        )
    SQL
  end

  def down
    remove_column :categories, :articles_count
  end
end
