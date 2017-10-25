import merge from 'lodash/merge';

import {RECEIVE_USERS, HOLD_EMAIL} from '../actions/user_actions';

const UsersReducer = (oldState={}, action) => {
  // debugger
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USERS:
    return merge({}, action.users);
    case HOLD_EMAIL:
    return merge({}, action.email);
    default:
    return oldState;
  }
};

export default UsersReducer;
