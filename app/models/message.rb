class Message < ApplicationRecord
  
  
  with_options presence: true do 
    validates :name,    length: { maximum:   60 }
    validates :email,   length: { maximum:  255 },
                       format: { with: VALID_EMAIL_REGEX }
    validates :subject, length: { maximum:  120 }
    validates :message, length: { maximum: 5000 }
  end
  
  validates :read, inclusion: { in: [true, false] }
end
