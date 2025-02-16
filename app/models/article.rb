# frozen_string_literal: true

# Model for Article
class Article < ApplicationRecord
  include DatatableColumnsConcern

  define_datatable_column :title
  define_datatable_column :date,
                          label: 'Date',
                          searchable: false,
                          formatter: ->(record) { record.created_at.strftime('%m/%d/%Y') }
  define_datatable_column :status,
                          searchable: false,
                          sortable: false
  define_datatable_column :categories,
                          source: 'Category.name',
                          searchable: false,
                          formatter: ->(record) { record.list_categories }
  define_datatable_column :tags,
                          source: 'Tag.name',
                          searchable: false,
                          formatter: ->(record) { record.list_tags }
  define_controls_column  formatter: ->(record) { helpers.controls_html(record) }

  scope :month, lambda { |date|
    where(created_at: date.all_month) if date.present?
  }
  scope :tag,      ->(slug) { joins(:tags).where(tags: { slug: slug }) if slug.present? }
  scope :category, ->(slug) { joins(:categories).where(categories: { slug: slug }) if slug.present? }

  belongs_to :author,
             inverse_of: :articles,
             class_name: 'User',
             foreign_key: 'user_id'
  delegate :name, to: :author, prefix: true

  has_many :article_categories, dependent: :destroy
  has_many :categories, through: :article_categories
  has_many :article_tags, dependent: :destroy
  has_many :tags, through: :article_tags

  with_options presence: true do
    validates :title,   length: { maximum: 120 }
    validates :content, length: { maximum: 5000 }
    validates :author
  end

  class << self
    def published
      where(published: true)
        .order(created_at: :desc)
    end

    def filtered(params)
      month(params[:month])
        .tag(params[:tags])
        .category(params[:category])
    end

    def for_datatable
      includes(:tags, :categories)
    end
  end

  def published?
    published
  end

  def status
    published ? 'Published' : 'Draft'
  end

  def list_categories
    categories.map(&:name).to_sentence
  end

  def list_tags
    tags.map(&:name).to_sentence
  end
end
