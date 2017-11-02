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

export const updateEvent = formData => {
  return(
    $.ajax({
      method: 'patch',
      url: `api/events/${formData.get('event[id]')}`,
      data: formData,
      processData: false,
      contentType: false,
    }));
};

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

// export const updateEventCategory = eventCategory => (
//   $.ajax({
//     method: 'patch',
//     url: `api/event_categories/${eventCategory.id}`,
//     data: {eventCategory}
//   })
// );

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

// export const updateEventEventType = eventEventType => (
//   $.ajax({
//     method: 'patch',
//     url: `api/event_event_types/${eventEventType.id}`,
//     data: {eventEventType}
//   })
// );

export const createSavedEvent = saved_event => (
  $.ajax({
    method: 'post',
    url: 'api/saved_events',
    data: {saved_event}
  })
);

export const deleteSavedEvent = id => (
  $.ajax({
    method: 'delete',
    url: `api/saved_events/${id}`
  })
);

export const createTicket = ticket => (
  $.ajax({
    method: 'post',
    url: 'api/tickets',
    data: {ticket}
  })
);

export const fetchByCategory = category => (
  $.ajax({
    method: 'get',
    url: 'api/categories/search',
    data: {category: category.name}
  })
);
