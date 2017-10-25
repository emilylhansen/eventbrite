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
import GreetingContainer from './greeting/greeting_container';

// <h1>Happeningbrite</h1>
// <GreetingContainer/>
const App = () => (
  <div>
    <Switch>
      <Route exact path="/signin" component={SessionFormContainer}/>
      <Route exact path="/signin/login" component={SessionFormLoginContainer}/>
      <Route exact path="/signin/signup" component={SessionFormSignupContainer}/>
      <Route path="/" component={GreetingContainer}/>
    </Switch>
  </div>
);

export default App;
