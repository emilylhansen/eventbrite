class EventEventType < ApplicationRecord
  validates :event_id, :event_type_id, presence: true
  
  belongs_to :event
  belongs_to :event_type
end
