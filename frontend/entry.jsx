import React from 'react';
import ReactDOM from 'react-dom';
import {signup, login, logout, emailExists} from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';
import {fetchUsers} from './actions/user_actions';


document.addEventListener("DOMContentLoaded", ()=> {
  const store = configureStore();
  const root = document.getElementById("root");

  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchUsers = fetchUsers;
  window.emailExists = emailExists;

  ReactDOM.render(<Root store={store} />, root);
});
