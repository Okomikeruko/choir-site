class PerformanceSong < ApplicationRecord
  belongs_to :performance
  belongs_to :song
end
