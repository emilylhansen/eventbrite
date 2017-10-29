import * as EventApiUtil from '../util/event_api_util';

export const RECEIVE_EVENT_TYPES = 'RECEIVE_EVENT_TYPES';

export const receiveEventTypes = eventTypes => ({
  type: RECEIVE_EVENT_TYPES,
  eventTypes
});

export const fetchEventTypes = () => dispatch => (
  EventApiUtil.fetchEventTypes().then (
    eventTypes => dispatch(receiveEventTypes(eventTypes))
  )
);
