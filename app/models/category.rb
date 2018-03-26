class Category < ApplicationRecord
  belongs_to :parent_category,
             class_name: "Category",
             optional: true
             
  has_many :children_categories,
            class_name: "Category",
            foreign_key: "category_id"
  
  has_many :article_categories
  has_many :articles, through: :article_categories
            
  with_options( presence: true,
                length: { maximum: 30 },
                uniqueness: { case_sensitive: false }) do 
    validates :name
    validates :slug
  end
end
