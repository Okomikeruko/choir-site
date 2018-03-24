class Profile < ApplicationRecord
  before_save :set_position
  
  default_scope { order(position: :asc) }
  
  has_attached_file :image, default_url: "portrait-placeholder.jpg"
  
  process_in_background :image
  
  with_options presence: true do 
    validates :name,  length: { maximum: 60 }
    validates :title, length: { maximum: 60 }
    validates :bio,   length: { maximum: 5000 } 
  end
  
  validates_attachment :image, :content_type => { content_type: %w(image/jpeg image/x-png) }
  
  private
    def set_position
      if Profile.any?
        self.position ||= Profile.last.position.to_i + 1
      else
        self.position = 1
      end
    end
end
