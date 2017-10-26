class EventType < ApplicationRecord
  has_many :event_event_types
  has_many :events, through: :event_event_types
end
