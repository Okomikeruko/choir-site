class PerformanceSong < ApplicationRecord
  belongs_to :performance
  belongs_to :song, counter_cache: :performances_count, touch: true
end
