# frozen_string_literal: true

# if Rails.env.development?
#   require 'rack-mini-profiler'
#   # Enable by default for all users
#   Rack::MiniProfiler.config.enable_profiler = true
#   # Set Redis as the store
#   # Rack::MiniProfiler.config.storage = Rack::MiniProfiler::RedisStore.new(connection: Redis.new)
#   # Use memory store by default (simpler setup)
#   Rack::MiniProfiler.config.storage = Rack::MiniProfiler::MemoryStore
#   # Display full backtraces
#   Rack::MiniProfiler.config.backtrace_includes = [%r{^/?(app|config|lib|test)}]
#   # Skip paths
#   Rack::MiniProfiler.config.skip_paths = ['/assets', '/cable', '/packs', '/public']
# end
