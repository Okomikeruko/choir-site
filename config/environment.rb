# frozen_string_literal: true

# Load the Rails application.
require_relative 'application'

# Add a tracer to detect when Rails.application.secrets is accessed
Rails.application.singleton_class.prepend(Module.new do
  def secrets
    puts "ACCESSING SECRETS - Stack trace:"
    caller.first(25).each.with_index(1) do |line, index|
      puts "  #{index}: #{line}"
    end
    super
  end
end)

# Initialize the Rails application.
Rails.application.initialize!
