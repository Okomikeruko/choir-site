# frozen_string_literal: true

# Model for PerformanceSong
class PerformanceSong < ApplicationRecord
  belongs_to :performance
  belongs_to :song, counter_cache: :performances_count
end
