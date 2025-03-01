

# In test mode, we want controllable behavior
if Rails.env.test?
  InvisibleCaptcha.setup do |config|
    # Keep timestamp enabled for specific tests
    # config.timestamp_enabled = true

    # Set a predictable honeypot
    config.honeypots = ['choir_part']

    # Lower threshold to speed up tests
    # config.timestamp_threshold = 1
  end
end