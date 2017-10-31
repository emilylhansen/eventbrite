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

export const fetchCategories = () => (
  $.ajax({
    method: 'get',
    url: 'api/categories'
  })
);

export const createEventCategory = eventCategory => (
  $.ajax({
    method: 'post',
    url: 'api/event_categories',
    data: {eventCategory}
  })
);

export const fetchEventTypes = () => (
  $.ajax({
    method: 'get',
    url: 'api/event_types'
  })
);

export const createEventEventType = eventEventType => (
  $.ajax({
    method: 'post',
    url: 'api/event_event_types',
    data: {eventEventType}
  })
);

export const createSavedEvent = savedEvent => (
  $.ajax({
    method: 'post',
    url: 'api/saved_events',
    data: {savedEvent}
  })
);

export const deleteSavedEvent = id => (
  $.ajax({
    method: 'delete',
    url: `api/saved_events/${id}`
  })
);
