json.extract! savedEvent,
:id,
:user_id,
:event_id

json.extract! savedEvent.event,
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
