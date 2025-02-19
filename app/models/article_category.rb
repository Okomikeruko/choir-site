# frozen_string_literal: true

# Model for ArticleCategory
class ArticleCategory < ApplicationRecord
  belongs_to :article
  belongs_to :category, counter_cache: true
end
