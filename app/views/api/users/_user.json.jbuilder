json.extract! user, :id, :email, :first_name, :last_name

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

      if current_user
        json.current_user_saved user.events[i].users.exists?(id: current_user.id)
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

json.organized_events do
  user.organized_events.each do |organized_event|
    json.set! organized_event.id do
      json.extract! organized_event,
      :id,
      :start_date_time,
      :title
    end
  end
end

json.tickets do
  (0...user.tickets.length).each do |i|
    json.set! user.tickets[i].id do
      json.id user.tickets[i].id
      json.event_id user.purchased_events[i].id
      json.start_date_time user.purchased_events[i].start_date_time
      json.title user.purchased_events[i].title
      json.created_at user.tickets[i].created_at
      json.extract! user.purchased_events[i], :avatar_file_name, :avatar
    end
  end
end
