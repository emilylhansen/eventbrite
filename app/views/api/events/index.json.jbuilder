# @events.each do |event|
#   json.set! event.id do
#     json.partial! 'event', event: event
#   end
# end

json.array! @events do |event|
  json.partial! "event", event: event
end
