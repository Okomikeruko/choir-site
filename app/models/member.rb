class Member < ApplicationRecord
  serialize :vocal_range

  with_options presence: true do
    validates :name, length: {maximum: 60}
    validates :vocal_range
  end

  validates :email, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX }

  def is_soprano?
    vocal_range.include? 'Soprano'
  end

  def is_alto?
    vocal_range.include? 'Alto'
  end

  def is_tenor?
    vocal_range.include? 'Tenor'
  end

  def is_bass?
    vocal_range.include? 'Bass'
  end
end