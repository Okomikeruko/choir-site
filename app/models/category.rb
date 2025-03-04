# frozen_string_literal: true

# Model for Category
class Category < ApplicationRecord
  include DatatableColumnsConcern

  define_datatable_column :name
  define_datatable_column :slug
  define_datatable_column :article_categories_count,
                          label: 'Uses'
  define_controls_column formatter: ->(record) { CategoryPresenter.new(record).controls }

  belongs_to :parent_category,
             class_name: 'Category',
             foreign_key: 'category_id',
             optional: true,
             inverse_of: :children_categories
  has_many :children_categories,
           class_name: 'Category',
           dependent: :destroy,
           inverse_of: :parent_category
  has_many :article_categories, dependent: :destroy
  has_many :articles, through: :article_categories

  with_options(presence: true,
               length: { maximum: 30 },
               uniqueness: { case_sensitive: false }) do
    validates :name
    validates :slug
  end
end
