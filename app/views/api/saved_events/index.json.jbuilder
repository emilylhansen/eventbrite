@savedEvents.each do |savedEvent|
  json.set! savedEvent.id do
    json.partial! 'saved_event', savedEvent: savedEvent
  end
end
