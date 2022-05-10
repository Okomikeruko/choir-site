class PaperclipToActiveStorageJob < ApplicationJob
  queue_as :default
  
  class << self 
    
    def records_to_migrate(klass, attribute)
      klass.left_outer_joins(:"#{attribute}_attachment")
           .where(active_storage_attachments: {id: nil})
           .where.not("#{attribute}_file_name" => nil)
    end
    
    def generate!(klass, attribute)
      unless klass.new.respond_to?("active_storage_#{attribute}=") && klass.new.respond_to?("paperclip_#{attribute}=")
        raise "#{klass}##{attribute} isn't configured to be migrated"
      end
      records_to_migrate(klass, attribute).find_each do |record|
        perform_later(record, attribute)
      end
    end
    
  end

  def perform(record, attribute)
    tempfile = Tempfile.new
    record.with_lock do
      return if record.public_send("#{attribute}_attachment").present?
      paperclip_attachment = record.public_send(attribute)
      paperclip_attachment.copy_to_local_file(:original, tempfile.path)
      tempfile.rewind
      record.public_send("active_storage_#{attribute}=", {
        :io           => tempfile,
        :filename     => paperclip_attachment.original_filename,
        :content_type => paperclip_attachment.content_type,
        :identify     => false
      })
      record.save!
    end
  ensure
    tempfile.close
  end
end
