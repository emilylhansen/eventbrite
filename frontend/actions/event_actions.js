import * as EventApiUtil from '../util/event_api_util';

import {receiveErrors, RECEIVE_ERRORS} from './session_actions';

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';

export const receiveEvents = events => ({
  type: RECEIVE_EVENTS,
  events
});

export const receiveEvent = event => ({
  type: RECEIVE_EVENT,
  event
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
    errors => {
      debugger
      dispatch(receiveErrors(errors.responseJSON))
    }
  )
);

export const updateEvent = event => dispatch => (
  EventApiUtil.updateEvent(event).then(
    event => dispatch(receiveEvent(event)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);
