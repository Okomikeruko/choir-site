class Tag < ApplicationRecord

  has_many :article_tag, dependent: :destroy 
  has_many :articles, through: :article_tag
            
  with_options( presence: true,
                length: { maximum: 30 },
                uniqueness: { case_sensitive: false }) do 
    validates :name
    validates :slug
  end
  
end
