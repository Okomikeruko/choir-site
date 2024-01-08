# frozen_string_literal: true

# The Profile class represents a user profile in the application.
class Profile < ApplicationRecord
  before_save :set_position

  default_scope { order(position: :asc) }

  has_one_attached :image

  with_options presence: true do
    validates :name,  length: { maximum: 60 }
    validates :title, length: { maximum: 60 }
    validates :bio,   length: { maximum: 5000 }
  end

  private

  # Sets the position of the profile based on the existing profiles.
  def set_position
    if Profile.any?
      self.position ||= Profile.last.position.to_i + 1
    else
      self.position = 1
    end
  end
end
