import merge from 'lodash/merge';

import {RECEIVE_EVENTS,
  RECEIVE_EVENT,
  RECEIVE_EVENT_CATEGORY,
  RECEIVE_EVENT_EVENT_TYPE} from '../actions/event_actions';

const EventsReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_EVENTS:
    return merge({}, action.events);
    case RECEIVE_EVENT:
    return merge({}, oldState, {[action.event.id]: action.event});
    default:
    return oldState;
  }
};

export default EventsReducer;
