import React from 'react';
import { connect } from 'react-redux';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { closeModal } from '../actions/modal_actions';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


import MyModal from './myModal';
import SessionFormContainer from './session_form/session_form_container';
import SessionFormLoginContainer from './session_form/session_form_login_container';
import SessionFormSignupContainer from './session_form/session_form_signup_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import HomepageContainer from './homepage/homepage_container';
import EventFormContainer from './event_form/event_form_container';
import EventIndexContainer from './event_index/event_index_container';
import EventShowContainer from './event_show/event_show_container';
import TicketContainer from './ticket/ticket_container';
import UserShowContainer from './user_show/user_show_container';
import UserEventsContainer from './user_events/user_events_container';
// <MyModal component={TicketContainer}
//   modal={modal}
//   closeModal={closeModal}/>

const App = () => (
  <div>
    <Switch>
      <Route exact path="/signin" component={SessionFormContainer}/>
      <Route exact path="/signin/login" component={SessionFormLoginContainer}/>
      <Route exact path="/signin/signup" component={SessionFormSignupContainer}/>
      <Route exact path="/events" component={EventIndexContainer}/>
      <Route exact path="/events/category/:categoryName" component={EventIndexContainer}/>
      <Route exact path="/events/event-type/:eventTypeName" component={EventIndexContainer}/>
      <ProtectedRoute exact path="/events/new" component={EventFormContainer}/>
      <ProtectedRoute exact path="/events/:eventId" component={EventShowContainer}/>
      <ProtectedRoute exact path="/events/:eventId/edit" component={EventFormContainer}/>
      <ProtectedRoute exact path="/users/:userId" component={UserShowContainer}/>
      <ProtectedRoute exact path="/myevents" component={UserEventsContainer}/>
      <Route path="/" component={HomepageContainer}/>
    </Switch>
  </div>
);

// const mapStateToProps = ({ ui: { modal }}) => {
//   return {
//     modal,
//   };
// };
//
// const mapDispatchToProps = dispatch => {
//   return {
//     closeModal: () => dispatch(closeModal())
//   };
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
