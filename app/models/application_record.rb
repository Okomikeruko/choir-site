# frozen_string_literal: true

# ApplicationRecord is the base class for all models in the application.
class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i.freeze
end
