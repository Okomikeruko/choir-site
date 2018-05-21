class Message < ApplicationRecord
  
  default_scope { order(created_at: :desc) }
  
  with_options presence: true do 
    validates :name,    length: { maximum:   60 }
    validates :email,   length: { maximum:  255 },
                       format: { with: VALID_EMAIL_REGEX }
    validates :subject, length: { maximum:  120 }
    validates :message, length: { maximum: 5000 }
  end
  
  validates :read, inclusion: { in: [true, false] }
  
  ## Set read to true
  def mark_as_read
    update_attribute(:read, true)
  end
  
  def send_email
    Message.contact_form(self).deliver_now
  end
  
  class << self 
    ## Get count of unread messages
    def unread 
      Message.where(:read => false).count
    end
    
    ## Return true if there is at least 1 unread message 
    def any_unread?
      Message.unread > 0
    end
  end
  
end
