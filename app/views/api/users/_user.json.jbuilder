json.extract! user, :id, :email, :first_name, :last_name

# json.tickets json.array! user.tickets, :id, :event_id

# json.saved_events do
#   user.events.each do |event|
#     user.saved_events.each do |saved_event|
#       json.set! event.id do
#          json.event_id event.id
#          json.title event.title
#          json.saved_event_id saved_event.id
#        end
#      end
#    end
#  end

json.saved_events do
  (0...user.events.length).each do |i|
    json.set! user.events[i].id do
      json.event_id user.events[i].id
      json.saved_event_id user.saved_events[i].id
      json.extract! user.events[i],
        :title,
        :start_date_time,
        :end_date_time,
        :description,
        :price,
        :num_tickets,
        :organizer_id,
        :organizer_name,
        :organizer_description,
        :location,
        :avatar_file_name,
        :avatar
      json.category do
        user.events[i].categories.each do |category|
          json.set! category.id do
            json.name category.name
          end
        end
      end

      json.eventType do
        user.events[i].event_types.each do |event_type|
          json.set! event_type.id do
            json.name event_type.name
          end
        end
      end 
    end
  end
end
