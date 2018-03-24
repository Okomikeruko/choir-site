class Song < ApplicationRecord
  before_save :set_slug, :set_sort_order
  
  default_scope { order(performance_date: :desc) }
  
  has_many :sheet_musics, inverse_of: :song, dependent: :destroy
  accepts_nested_attributes_for :sheet_musics, 
                  reject_if: :all_blank,
                  allow_destroy: true
  has_many :audios, inverse_of: :song, dependent: :destroy
  accepts_nested_attributes_for :audios,
                  reject_if: :all_blank,
                  allow_destroy: true
  
  has_many :instruments, inverse_of: :song, dependent: :destroy 
  accepts_nested_attributes_for :instruments,
                  reject_if: :all_blank,
                  allow_destroy: true
  
  validates :title, presence: true,
                    length: { maximum: 60 }
                    
  private
    def set_slug
      self.slug = title.parameterize
    end
    
    def set_sort_order
      unless title.starts_with?("The ", "A ", "An ")
        self.sort_order = title
      else
        word = title.partition(" ").first
        self.sort_order = title["#{word} ".size..-1].concat(", #{word}")
      end
    end
    
end
