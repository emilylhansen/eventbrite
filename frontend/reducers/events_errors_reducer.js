import merge from 'lodash/merge';
import {RECEIVE_ERRORS} from '../actions/session_actions';

const EventsErrorsReducer = (oldState=[], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ERRORS:
    return merge({}, action.errors);
    default:
    return oldState;
  }
};

export default EventsErrorsReducer;
