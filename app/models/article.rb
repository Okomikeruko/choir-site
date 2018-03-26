class Article < ApplicationRecord
  belongs_to :author, 
             class_name: "User",
             foreign_key: "user_id"
  
  has_many :article_categories
  has_many :categories, through: :article_categories
  has_many :article_tags
  has_many :tags, through: :article_tags
  
  with_options presence: true do 
    validates :title,   length: { maximum: 120 }
    validates :content, length: { maximum: 5000 } 
    validates :author
  end
  
  def status
    published ? "Published" : "Draft"
  end
  
  def self.all_published
    Article.where(:published => true)
  end
end
