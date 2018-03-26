class AddPublishedToArticles < ActiveRecord::Migration[5.1]
  def change
    add_column :articles, :published, :boolean, null: false, default: false
  end
end
