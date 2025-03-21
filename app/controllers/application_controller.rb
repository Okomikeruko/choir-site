# frozen_string_literal: true

# Controller for managing the overall application.
class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  include Pagy::Backend

  before_action :assign_security_headers

  private

  def assign_security_headers
    response.headers['X-Frame-Options'] = 'SAMEORIGIN'
    response.headers['X-Xss-Protection'] = '1; mode=block'
    response.headers['X-Content-Type-Options'] = 'nosniff'
    response.headers['Content-Security-Policy'] = csp_policy
  end

  def csp_policy
    s3 = ENV.fetch('S3_BUCKET_DOMAIN', nil)

    [
      "default-src 'self'",
      "img-src 'self' data: #{s3}",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdnjs.cloudflare.com #{s3}",
      "object-src 'self' #{s3}",
      "media-src 'self' #{s3}",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "connect-src 'self'",
      "frame-ancestors 'none'"
    ].join('; ')
  end
end
