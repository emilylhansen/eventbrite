json.extract! event,
  :id,
  :title,
  :lat,
  :lng,
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
