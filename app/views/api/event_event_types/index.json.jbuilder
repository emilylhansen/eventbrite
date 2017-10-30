@eventEventTypes.each do |eventEventType|
  json.set! eventEventType.id do
    json.partial! 'event_event_type', eventEventType: eventEventType
  end
end
