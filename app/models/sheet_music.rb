class SheetMusic < ApplicationRecord
  default_scope { order(position: :asc) }
  
  belongs_to :song
  
  has_attached_file :pdf
  
  validates :instrument, presence: true,
                         length: { maximum: 60 }
  validates_attachment :pdf, :content_type => { content_type: %w(application/pdf) }
end
