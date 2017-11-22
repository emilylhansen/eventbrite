class Event < ApplicationRecord
  validates :title,
            :location,
            :start_date_time,
            :end_date_time,
            :description,
            :price,
            :organizer_id,
            :organizer_name,
            :organizer_description,
            :num_tickets,
            presence: true


  validates :avatar, attachment_presence: true
  # validates_with AttachmentPresenceValidator, attributes: :avatar
  # validates_with AttachmentSizeValidator, attributes: :avatar, less_than: 1.megabytes

  has_many :event_categories
  has_many :categories, through: :event_categories

  has_many :event_event_types
  has_many :event_types, through: :event_event_types

  has_many :tickets
  has_many :purchasers,
  through: :tickets,
  source: :user

  has_many :saved_events
  has_many :users, through: :saved_events

  belongs_to :organizer,
  primary_key: :id,
  foreign_key: :organizer_id,
  class_name: 'User'


  has_attached_file :avatar, default_url: "leaf.jpg"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/
end
