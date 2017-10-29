@eventTypes.each do |eventType|
  json.set! eventType.id do
    json.partial! 'event_type', eventType: eventType
  end
end
