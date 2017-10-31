json.extract! user, :id, :email, :first_name, :last_name

# json.tickets json.array! user.tickets, :id, :event_id

json.saved_events do
  user.events.each do |event|
    json.set! event.id do
       json.id event.id
       json.title event.title
     end
   end
 end
