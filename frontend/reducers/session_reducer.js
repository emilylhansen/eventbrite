import merge from 'lodash/merge';

import {RECEIVE_CURRENT_USER,
  RECEIVE_USERS,
  RECEIVE_EMAIL,
  RECEIVE_EMAIL_EXISTS
} from '../actions/session_actions';
import {
  RECEIVE_SAVED_EVENT,
  REMOVE_SAVED_EVENT
} from '../actions/event_actions';
const defaultState = {
  currentUser: null,
  email: ""
};

const SessionReducer = (oldState=defaultState, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    return merge({}, {currentUser: action.currentUser});
    case RECEIVE_USERS:
    return merge({}, action.users);
    case RECEIVE_EMAIL:
    return merge({}, {email: action.email});
    case RECEIVE_EMAIL_EXISTS:
    return merge({}, action.emailBool);
    case RECEIVE_SAVED_EVENT:
    newState = merge({}, oldState);
    newState.currentUser.saved_events[action.savedEvent.event_id] = action.savedEvent;
    return newState;
    case REMOVE_SAVED_EVENT:
    newState = merge({}, oldState);
    let eventId;
    Object.values(oldState.currentUser.saved_events).map(e => {
      if(e.saved_event_id === action.savedEventId){
        eventId = e.event_id;
      }
    });
    delete oldState.currentUser.saved_events[eventId];
    return newState;
    default:
    return oldState;
  }
};

export default SessionReducer;
