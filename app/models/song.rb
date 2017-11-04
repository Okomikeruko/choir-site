class Song < ApplicationRecord
  has_many :sheet_musics
  has_many :audios
  
  validates :title, presence: true,
                    length: { maximum: 60 }
end
