class Article < ApplicationRecord
  default_scope { order(created_at: :desc) }

  scope :month,    -> (date) { where(created_at: DateTime.strptime(date, "%Y-%m-%d").beginning_of_month..DateTime.strptime(date, "%Y-%m-%d").end_of_month) if date.present?}
  scope :tag,      -> (slug) { joins(:tags).where(tags: {slug: slug}) if slug.present? }
  scope :category, -> (slug) { joins(:categories).where(categories: {slug: slug}) if slug.present? }

  belongs_to :author,
             class_name: "User",
             foreign_key: "user_id"
  delegate :name, :to => :author, :prefix => true

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
    end

    def filtered(params)
      month(params[:month])
      .tag(params[:tags])
      .category(params[:category])
    end
  end

  def is_published?
    self.published
  end

  def status
    published ? "Published" : "Draft"
  end

  def list_categories
    categories.map {|c| c.name}.to_sentence
  end

  def list_tags
    tags.map {|t| t.name}.to_sentence
  end
end
