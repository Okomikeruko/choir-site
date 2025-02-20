# frozen_string_literal: true

class RenameArticlesCountInCategories < ActiveRecord::Migration[6.1]
  def up
    rename_column :categories,
                  :articles_count,
                  :article_categories_count

    Category.find_each do |category|
      Category.reset_counters(category.id, :article_categories)
    end
  end

  def down
    rename_column :categories,
                  :article_categories_count,
                  :articles_count
  end
end
