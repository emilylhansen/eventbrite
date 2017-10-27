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

export const createEvent = (formData, callback) => (
  $.ajax({
    method: 'post',
    url: 'api/events',
    data: formData,
    processData: false,
    contentType: false,
  })
);

// dataType: 'json',
// success: function() {
//   callback();
// }

export const updateEvent = event => (
  $.ajax({
    method: 'patch',
    url: `api/events/${event.id}`,
    data: {event}
  })
);
