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
  :organizer_description


json.avatar_url asset_path(event.avatar.url)

json.attendees do
  json.array! event.tickets do |ticket|
       json.id ticket.id
       json.purchaser_id ticket.purchaser_id
   end
 end
