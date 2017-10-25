import * as UserApiUtil from '../util/user_api_util';
import receiveCurrentUser from './session_actions';

export const RECEIVE_USERS = 'RECEIVE_USERS';

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const fetchUsers = () => dispatch => (
  UserApiUtil.fetchUsers().then(
  users => dispatch(receiveUsers(users)))
);

export const fetchUser = id => dispatch => (
  UserApiUtil.fetchUser(id).then(
  user => dispatch(receiveCurrentUser(user)))
);
