class Song < ApplicationRecord
  extend PaperclipToActiveStorage
  
  before_save :set_slug, :set_sort_order

  default_scope { order(sort_order: :asc) }

  has_many :instruments, inverse_of: :song, dependent: :destroy
  accepts_nested_attributes_for :instruments,
                  reject_if: :all_blank,
                  allow_destroy: true

  has_many :performance_songs, inverse_of: :song, dependent: :destroy
  has_many :performances, through: :performance_songs, counter_cache: true

  has_many :rehearsal_songs, inverse_of: :song, dependent: :destroy
  has_many :rehearsals, through: :rehearsal_songs

  has_paperclip_attachment_with_active_storage :lilypond

  validates :title, presence: true,
                    length: { maximum: 60 }

  do_not_validate_attachment_file_type :lilypond


  def primary_instrument
    instruments.detect {|i| i.mp3.exists? }
  end

  class << self
    def unused
      where(:performances_count => 0)
    end
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