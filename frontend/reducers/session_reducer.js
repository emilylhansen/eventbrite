import merge from 'lodash/merge';

import {RECEIVE_CURRENT_USER, RECEIVE_USERS} from '../actions/session_actions';

const defaultState = {
  current_user: null
};

const SessionReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    return merge({}, action.currentUser);
    case RECEIVE_USERS:
    return merge({}, action.users);
    default:
    return oldState;
  }
};

export default SessionReducer;
