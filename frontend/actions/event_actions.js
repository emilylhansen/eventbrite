import * as EventApiUtil from '../util/event_api_util';

import {receiveErrors, RECEIVE_ERRORS} from './session_actions';

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const RECEIVE_EVENT_CATEGORY = 'RECEIVE_EVENT_CATEGORY';
export const RECEIVE_EVENT_EVENT_TYPE = 'RECEIVE_EVENT_EVENT_TYPE';
export const RECEIVE_SAVED_EVENT = 'RECEIVE_SAVED_EVENT';
export const REMOVE_SAVED_EVENT = 'REMOVE_SAVED_EVENT';
export const RECEIVE_TICKET = 'RECEIVE_TICKET';

export const receiveEvents = events => ({
  type: RECEIVE_EVENTS,
  events
});

export const receiveEvent = event => ({
  type: RECEIVE_EVENT,
  event
});

export const receiveEventCategory = eventCategory => ({
  type: RECEIVE_EVENT_CATEGORY,
  eventCategory
});

export const receiveEventEventType = eventEventType => ({
  type: RECEIVE_EVENT_EVENT_TYPE,
  eventEventType
});

export const receiveSavedEvent = savedEvent => ({
  type: RECEIVE_SAVED_EVENT,
  savedEvent
});

export const removeSavedEvent = savedEventId => ({
  type: REMOVE_SAVED_EVENT,
  savedEventId
});

export const receiveTicket = ticket => ({
  type: RECEIVE_TICKET,
  ticket
});

export const fetchEvents = () => dispatch => (
  EventApiUtil.fetchEvents().then(
    events => dispatch(receiveEvents(events)))
);

export const fetchEvent = id => dispatch => (
  EventApiUtil.fetchEvent(id).then(
    event => dispatch(receiveEvent(event)))
);

export const createEvent = event => dispatch => (
  EventApiUtil.createEvent(event).then(
    event => dispatch(receiveEvent(event)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const updateEvent = event => dispatch => (
  EventApiUtil.updateEvent(event).then(
    event => dispatch(receiveEvent(event)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const createEventCategory = eventCategory => dispatch => (
  EventApiUtil.createEventCategory(eventCategory).then(
    eventCategory => dispatch(receiveEventCategory(eventCategory)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);
//
// export const updateEventCategory = eventCategory => dispatch => (
//   EventApiUtil.updateEventCategory(eventCategory).then(
//     eventCategory => dispatch(receiveEventCategory(eventCategory)),
//     errors => dispatch(receiveErrors(errors.responseJSON))
//   )
// )

export const createEventEventType = eventEventType => dispatch => (
  EventApiUtil.createEventEventType(eventEventType).then(
    eventEventType => dispatch(receiveEventEventType(eventEventType)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

// export const updateEventEventType = eventEventType => dispatch => (
//   EventApiUtil.updateEventEventType(eventEventType).then(
//     eventEventType => dispatch(receiveEventEventType(eventEventType)),
//     errors => dispatch(receiveErrors(errors.responseJSON))
//   )
// );

export const createSavedEvent = savedEvent => dispatch => (
  EventApiUtil.createSavedEvent(savedEvent).then(
    savedEvent => dispatch(receiveSavedEvent(savedEvent)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const deleteSavedEvent = savedEventId => dispatch => (
  EventApiUtil.deleteSavedEvent(savedEventId).then(
    savedEvent => dispatch(removeSavedEvent(savedEventId))
  )
);

export const createTicket = ticket => dispatch => (
  EventApiUtil.createTicket(ticket).then(
    ticket => dispatch(receiveTicket(ticket)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);
