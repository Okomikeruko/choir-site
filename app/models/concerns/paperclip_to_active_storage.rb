# frozen_string_literal: true

# Module PaperclipToActiveStorage provides a set of methods to facilitate the transition
# from Paperclip to Active Storage for handling file attachments in Rails models.
module PaperclipToActiveStorage
  # This method sets up both Active Storage and Paperclip attachments for a given attribute.
  # It also defines methods to handle assignment of attachments for both storage systems.
  #
  # @param attribute [Symbol] The name of the attribute for the attachment.
  # @param paperclip_options [Hash] Options to be passed to Paperclip for configuring the attachment.
  # def paperclip_attachment_with_active_storage(attribute, paperclip_options = {})
  #   has_one_attached attribute
  #   has_attached_file attribute, paperclip_options

  #   define_active_storage_assignment_method(attribute)
  #   define_paperclip_assignment_method(attribute)
  #   define_combined_assignment_method(attribute)
  # end

  # private

  # def define_active_storage_assignment_method(attribute)
  #   define_method "active_storage_#{attribute}=" do |attachable|
  #     attachment_changes[attribute.to_s] =
  #       if attachable.nil?
  #         ActiveStorage::Attached::Changes::DeleteOne.new(attribute.to_s, self)
  #       else
  #         ActiveStorage::Attached::Changes::CreateOne.new(attribute.to_s, self, attachable)
  #       end
  #   end
  # end

  # def define_paperclip_assignment_method(attribute)
  #   define_method "paperclip_#{attribute}=" do |attachable|
  #     send(attribute).assign(attachable)
  #   end
  # end

  # def define_combined_assignment_method(attribute)
  #   define_method "#{attribute}=" do |attachable|
  #     public_send("active_storage_#{attribute}=", attachable)
  #     public_send("paperclip_#{attribute}=", attachable)
  #   end
  # end
end
