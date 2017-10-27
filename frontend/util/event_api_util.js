export const fetchEvents = () => (
  $.ajax({
    method: 'get',
    url: 'api/events'
  })
);

export const fetchEvent = id => (
  $.ajax({
    method: 'get',
    url: `api/events/${id}`
  })
);

export const createEvent = event => (
  $.ajax({
    method: 'post',
    url: 'api/events',
    data: {event}
  })
);

// processData: false,
// contentType: false,
// dataType: 'json'

export const updateEvent = event => (
  $.ajax({
    method: 'patch',
    url: `api/events/${event.id}`,
    data: {event}
  })
);
