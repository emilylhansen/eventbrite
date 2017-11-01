json.extract! event,
  :id,
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
  :avatar_file_name


json.avatar_url asset_path(event.avatar.url)

json.attendees do
  event.tickets.each do |ticket|
    json.set! ticket.id do
       json.id ticket.id
       json.purchaser_id ticket.purchaser_id
     end
   end
 end

json.current_user_saved event.users.exists?(id: current_user.id)

json.category do
  event.categories.each do |category|
    json.set! category.id do
      json.name category.name
    end
  end
end

json.eventType do
  event.event_types.each do |event_type|
    json.set! event_type.id do
      json.name event_type.name
    end
  end
end
