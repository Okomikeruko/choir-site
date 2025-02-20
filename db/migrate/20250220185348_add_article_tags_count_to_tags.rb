# frozen_string_literal: true

class AddArticleTagsCountToTags < ActiveRecord::Migration[6.1]
  def change
    add_column :tags, :article_tags_count, :integer, default: 0, null: false

    Tag.find_each do |tag|
      Tag.reset_counters(tag.id, :article_tags)
    end
  end
end
