import merge from 'lodash/merge';

import {RECEIVE_EVENTS,
  RECEIVE_EVENT,
  RECEIVE_EVENT_CATEGORY,
  RECEIVE_EVENT_EVENT_TYPE,
  RECEIVE_SAVED_EVENT,
  REMOVE_SAVED_EVENT
} from '../actions/event_actions';

const EventsReducer = (oldState={}, action) => {
  // debugger
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_EVENTS:
    return merge({}, action.events);
    case RECEIVE_EVENT:
    return merge({}, oldState, {[action.event.id]: action.event});
    case RECEIVE_SAVED_EVENT:
    return merge({}, oldState, {[action.event.id]: action.event});
    case REMOVE_SAVED_EVENT:
    newState = merge({}, oldState);
    oldState[action.savedEventId];
    return newState;
    default:
    return oldState;
  }
};

export default EventsReducer;
