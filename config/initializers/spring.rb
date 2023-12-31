if Rails.env.production? && defined?(Spring)
    Spring.stop
end