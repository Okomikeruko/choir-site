# frozen_string_literal: true

# Model for ArticleTag
class ArticleTag < ApplicationRecord
  belongs_to :article
  belongs_to :tag
end
