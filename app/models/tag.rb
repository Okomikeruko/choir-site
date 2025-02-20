# frozen_string_literal: true

# Model for Tag
class Tag < ApplicationRecord
  include DatatableColumnsConcern

  define_datatable_column :name
  define_datatable_column :slug
  define_datatable_column :article_tags_count,
                          label: "Uses"
  define_controls_column formatter: ->(record) { TagPresenter.new(record).controls  }

  has_many :article_tags, dependent: :destroy
  has_many :articles, through: :article_tags

  with_options(presence: true,
               length: { maximum: 30 },
               uniqueness: { case_sensitive: false }) do
    validates :name
    validates :slug
  end
end
