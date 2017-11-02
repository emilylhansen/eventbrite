@events.each do |event|
  json.set! event.id do
    json.partial! 'api/events/event.json.jbuilder', event: event
  end
end
