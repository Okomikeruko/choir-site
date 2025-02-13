# frozen_string_literal: true

# Model for Member
class Member < ApplicationRecord
  include DatatableColumnsConcern

  define_datatable_column :name
  define_datatable_column :email
  define_datatable_column :phone
  define_datatable_column :vocal_range,
                          formatter: ->(record) { helpers.vocal_range(record) }
  define_datatable_column :talents,
                          label: "Other Musical Talents"
  define_controls_column formatter: ->(record) { helpers.controls_html(record)}

  serialize :vocal_range

  with_options presence: true do
    validates :name, length: { maximum: 60 }
    validates :vocal_range
  end

  validates :email, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX }

  def soprano?
    vocal_range.include? 'Soprano'
  end

  def alto?
    vocal_range.include? 'Alto'
  end

  def tenor?
    vocal_range.include? 'Tenor'
  end

  def bass?
    vocal_range.include? 'Bass'
  end
end
