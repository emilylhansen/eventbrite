import merge from 'lodash/merge';

import {RECEIVE_CURRENT_USER, RECEIVE_USERS, RECEIVE_EMAIL, RECEIVE_EMAIL_EXISTS} from '../actions/session_actions';

const defaultState = {
  currentUser: null,
  email: "",
  emailExists: null
};

const SessionReducer = (oldState=defaultState, action) => {
  // debugger
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    return merge({}, {currentUser: action.currentUser});
    case RECEIVE_USERS:
    return merge({}, action.users);
    case RECEIVE_EMAIL:
    return merge({}, {email: action.email});
    case RECEIVE_EMAIL_EXISTS:
    return merge({}, action.emailBool)
    default:
    return oldState;
  }
};

export default SessionReducer;
