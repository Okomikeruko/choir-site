class Song < ApplicationRecord
  has_many :sheet_musics, inverse_of: :song, dependent: :destroy
  accepts_nested_attributes_for :sheet_musics, 
                  reject_if: :all_blank,
                  allow_destroy: true
  has_many :audios, inverse_of: :song, dependent: :destroy
  accepts_nested_attributes_for :audios,
                  reject_if: :all_blank,
                  allow_destroy: true
  
  validates :title, presence: true,
                    length: { maximum: 60 }
end
