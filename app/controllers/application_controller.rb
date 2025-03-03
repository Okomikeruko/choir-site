# frozen_string_literal: true

# Controller for managing the overall application.
class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  # before_action do
  #   ActiveStorage::Current.host = request.base_url
  # end
end
