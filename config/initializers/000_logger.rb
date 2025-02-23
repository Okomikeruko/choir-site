# frozen_string_literal: true

require 'logger'
require 'active_support'

# Ensure Logger is loaded before it's used by ActiveSupport
Logger.new(STDOUT) unless defined?(Logger)

module ActiveSupport
  module LoggerThreadSafeLevel
    def self.included(base)
      base.extend(ClassMethods)
    end

    module ClassMethods
      def local_level
        IsolatedExecutionState[:logger_thread_safe_level]
      end

      def local_level=(level)
        IsolatedExecutionState[:logger_thread_safe_level] = level
      end
    end
  end
end