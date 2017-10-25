import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import SessionFormContainer from './session_form/session_form_container';
import GreetingContainer from './greeting/greeting_container';

const App = () => (
  <div>
    <h1>Happeningbrite</h1>
    <GreetingContainer/>
    <Switch>
      <Route exact path="/signin" component={SessionFormContainer}/>
      <Route path="/" />
    </Switch>
  </div>
);

export default App;
