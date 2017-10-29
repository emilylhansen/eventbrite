import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import SessionFormContainer from './session_form/session_form_container';
import SessionFormLoginContainer from './session_form/session_form_login_container';
import SessionFormSignupContainer from './session_form/session_form_signup_container';
import NavBarContainer from './navbar/navbar_container';
import HomepageContainer from './homepage/homepage_container';
import EventFormContainer from './event_form/event_form_container';
import EventIndexContainer from './event_index/event_index_container';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/signin" component={SessionFormContainer}/>
      <Route exact path="/signin/login" component={SessionFormLoginContainer}/>
      <Route exact path="/signin/signup" component={SessionFormSignupContainer}/>
      <Route exact path="/events" component={EventIndexContainer}/>
      <Route exact path="/events/new" component={EventFormContainer}/>
      <Route exact path="/events/:eventId/edit" component={EventFormContainer}/>
      <Route path="/" component={HomepageContainer}/>
    </Switch>
  </div>
);

export default App;
