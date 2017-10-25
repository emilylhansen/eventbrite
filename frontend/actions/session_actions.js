import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_EMAIL = 'RECEIVE_EMAIL';
export const RECEIVE_EMAIL_EXISTS = 'RECEIVE_EMAIL_EXISTS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receiveEmail = email => ({
  type: RECEIVE_EMAIL,
  email
});

export const receiveEmailExists = emailBool => ({
  type: RECEIVE_EMAIL_EXISTS,
  emailBool
})

export const signup = user => dispatch => (
  SessionApiUtil.signup(user).then(
  user => dispatch(receiveCurrentUser(user)),
  errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const login = user => dispatch => (
  SessionApiUtil.login(user).then(
  user => dispatch(receiveCurrentUser(user)),
  errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const logout = () => dispatch => (
  SessionApiUtil.logout().then(
  user => dispatch(receiveCurrentUser(null)))
);

export const emailExists = email => dispatch => (
  SessionApiUtil.emailExists(email).then(
    emailBool => dispatch(receiveEmailExists(emailBool))
  )
);
