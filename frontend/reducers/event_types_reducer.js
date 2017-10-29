import merge from 'lodash/merge';

import {RECEIVE_EVENT_TYPES} from '../actions/event_type_actions';

const EventTypesReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_EVENT_TYPES:
    return merge({}, action.eventTypes);
    default:
    return oldState;
  }
};

export default EventTypesReducer;
