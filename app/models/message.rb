# frozen_string_literal: true

# Model for Message
class Message < ApplicationRecord
  include DatatableColumnsConcern

  define_table_buttons(%w[selectAll selectNone markAsRead markAsUnread deleteMessages])
  define_row_attributes(
    'class' => ->(record) { "clickable-row#{' info' unless record.read? }" },
    'data' =>  ->(record) { { 'href' => Rails.application.routes.url_helpers.admin_message_path(record) } }
  )
  define_select_column
  define_datatable_column :name
  define_datatable_column :email
  define_datatable_column :subject
  define_datatable_column :created_at,
                          label: "Date",
                          sortPriority: 1,
                          sortOrder: 'desc',
                          formatter: ->(record) { record.created_at.strftime("%l:%M %P - %b %-d, %Y") }

  default_scope { order(created_at: :desc) }

  with_options presence: true do
    validates :name,    length: { maximum: 60 }
    validates :email,   length: { maximum:  255 },
                        format: { with: VALID_EMAIL_REGEX }
    validates :subject, length: { maximum:  120 }
    validates :message, length: { maximum: 5000 }
  end

  validates :read, inclusion: { in: [true, false] }

  ## Set read to true
  def mark_as_read
    update(read: true)
  end

  ## Send an email of the message
  def send_email
    MessageMailer.contact_form(self).deliver_now
  end

  class << self
    ## Get count of unread messages
    def unread
      where(read: false).count
    end

    ## Return true if there is at least 1 unread message
    def any_unread?
      unread.positive?
    end
  end
end
