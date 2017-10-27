class Event < ApplicationRecord
  validates :title,
            :lat,
            :lng,
            :start_date_time,
            :end_date_time,
            :description,
            :price,
            :organizer_id,
            :organizer_description,
            :num_tickets,
            presence: true

            # :image_content_type,
            # :image_file_name,
            # :image_file_size,
            # :image_updated_at,
            # :image

  has_many :event_categories
  has_many :categories, through: :event_categories
  has_many :event_event_types
  has_many :event_types, through: :event_event_types

  # has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }
  # validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
end
