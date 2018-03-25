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
  
  has_many :performance_songs
  has_many :performances, through: :performance_songs
  
  has_many :rehearsal_songs
  has_many :rehersals, through: :rehearsal_songs
  
  has_attached_file :lilypond
  
  validates :title, presence: true,
                    length: { maximum: 60 }
                    
  do_not_validate_attachment_file_type :lilypond
  
  
  def primary_instrument
    instruments.detect {|i| i.mp3.exists? }
  end
  
  
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
