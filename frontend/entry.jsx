import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {signup, login, logout, emailExists} from './actions/session_actions';
import {fetchUsers} from './actions/user_actions';
import {fetchEvents,
  fetchEvent,
  createEvent,
  createEventCategory,
  createEventEventType,
  createSavedEvent,
  deleteSavedEvent} from './actions/event_actions';
import {fetchCategories} from './actions/category_actions';
import {fetchEventTypes} from './actions/event_type_actions';


document.addEventListener("DOMContentLoaded", ()=> {
  const root = document.getElementById("root");
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchUsers = fetchUsers;
  window.emailExists = emailExists;
  window.fetchEvents = fetchEvents;
  window.fetchEvent = fetchEvent;
  window.createEvent = createEvent;
  window.fetchCategories = fetchCategories;
  window.fetchEventTypes = fetchEventTypes;
  window.createEventCategory = createEventCategory;
  window.createEventEventType = createEventEventType;
  window.createSavedEvent = createSavedEvent;
  window.deleteSavedEvent = deleteSavedEvent;

  ReactDOM.render(<Root store={store} />, root);
});
