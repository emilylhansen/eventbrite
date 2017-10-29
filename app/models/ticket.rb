class Ticket < ApplicationRecord
  validates :event_id, :purchaser_id, presence: true

  belongs_to :event
  belongs_to :purchaser,
  primary_key: :id,
  foreign_key: :purchaser_id,
  class_name: 'User'
  
end
