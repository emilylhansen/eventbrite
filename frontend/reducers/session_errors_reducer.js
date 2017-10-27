import merge from 'lodash/merge';
import {RECEIVE_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions';

const SessionErrorsReducer = (oldState=[], action) => {
  // debugger
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ERRORS:
    return merge({}, action.errors);
    case RECEIVE_CURRENT_USER:
    return [];
    default:
    return oldState;
  }
};

export default SessionErrorsReducer;
