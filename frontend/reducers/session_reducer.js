import merge from 'lodash/merge';

import {RECEIVE_CURRENT_USER,
  RECEIVE_USERS,
  RECEIVE_EMAIL
} from '../actions/session_actions';
import {
  RECEIVE_SAVED_EVENT,
  REMOVE_SAVED_EVENT,
  RECEIVE_TICKET
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
    case RECEIVE_SAVED_EVENT:
    // debugger
    newState = merge({}, oldState);
    newState.currentUser.saved_events[action.savedEvent.event_id] = action.savedEvent;
    return newState;
    case REMOVE_SAVED_EVENT:
    // debugger
    newState = merge({}, oldState);
    let eventId;
    Object.values(oldState.currentUser.saved_events).map(e => {
      if(e.saved_event_id === action.savedEventId){
        eventId = e.event_id;
      }
    });
    delete oldState.currentUser.saved_events[eventId];
    return newState;
    case RECEIVE_TICKET:
    newState = merge({}, oldState);
    newState.currentUser.tickets = action.ticket.tickets;
    return merge({}, oldState, newState);
    default:
    return oldState;
  }
};

export default SessionReducer;
