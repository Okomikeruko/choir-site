# frozen_string_literal: true

# Parent settings for all presenters to inherit from.
class ApplicationPresenter
  include ActionDispatch::Routing::PolymorphicRoutes
  include ActionView::Helpers::TagHelper
  include ActionView::Helpers::UrlHelper
  include ActionView::Context
  include Rails.application.routes.url_helpers

  def default_url_options
    Rails.application.config.action_mailer.default_url_options || { host: 'localhost:3000' }
  end
end
