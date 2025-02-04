# frozen_string_literal: true

# A background job for migrating attachments from Paperclip to Active Storage.
class PaperclipToActiveStorageJob < ApplicationJob
  queue_as :default

  class << self
    # Finds records in the given class and attribute that need to be migrated.
    def records_to_migrate(klass, attribute)
      klass.left_outer_joins(:"#{attribute}_attachment")
           .where(active_storage_attachments: { id: nil })
           .where.not("#{attribute}_file_name" => nil)
    end

    # Initiates the migration process for a class and attribute.
    def generate!(klass, attribute)
      unless klass.new.respond_to?("active_storage_#{attribute}=") && klass.new.respond_to?("paperclip_#{attribute}=")
        raise "#{klass}##{attribute} isn't configured to be migrated"
      end

      records_to_migrate(klass, attribute).find_each do |record|
        perform_later(record, attribute)
      end
    end
  end

  # Performs the migration for a specific record and attribute.
  def perform(record, attribute)
    return if record.public_send("#{attribute}_attachment").present?

    tempfile = Tempfile.new

    record.with_lock do
      copy_paperclip_attatchment_to_tempfile(record, attribute, tempfile)
      create_active_storage_attachment(record, attribute, tempfile)
    end
  ensure
    tempfile&.close
  end

  private

  # Copies Paperclip attachment to a tempfile.
  def copy_paperclip_attatchment_to_tempfile(record, attribute, tempfile)
    paperclip_attachment = record.public_send(attribute)
    paperclip_attachment.copy_to_local_file(:original, tempfile.path)
    tempfile.rewind
  end

  # Creates Active Storage attachment from the tempfile.
  def create_active_storage_attachment(record, attribute, tempfile)
    record.public_send("active_storage_#{attribute}=", {
                         io: tempfile,
                         filename: paperclip_attachment.original_filename,
                         content_type: paperclip_attachment.content_type,
                         identify: false
                       })
    record.save!
  end
end
