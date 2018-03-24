class Profile < ApplicationRecord
  default_scope { order(position: :asc) }
  
  has_attached_file :image
  
  with_options presence: true do 
    validates :name,  length: { maximum: 60 }
    validates :title, length: { maximum: 60 }
    validates :bio,   length: { maximum: 5000 } 
  end
  
  validates_attachment :image, :content_type => { content_type: %w(image/pjpeg image/x-png) }
end
