import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component{

  render(){
    const signinLogout = this.props.currentUser ?
    <li>
      <a href="/">{this.props.currentUser.first_name.toUpperCase()} &#9660;</a>
      <ul className="login-signup-dropdown">
        <li><a href={`/#/users/${this.props.currentUser.id}`}>Tickets</a></li>
        <li><a href={`/#/users/${this.props.currentUser.id}`}>
          {`Saved ${Object.values(this.props.currentUser.saved_events).length}`}</a></li>
        <li><a href={"/#/myevents"}>Manage Events</a></li>
        <li><a onClick={this.props.logout}>Log out</a></li>
      </ul>
    </li>
    :
    <li><a href="#/signin">SIGN IN</a></li>

    return (
      <header className="login-signup-header">
        <nav className="login-signup-nav">

          <h1 className="login-signup-logo">
            <a href="#" >Happeningbrite</a>
          </h1>

          <ul className="login-signup-header-list">
            <li><a href="/#/events">BROWSE EVENTS</a></li>
            {signinLogout}
            <li><a href="/#/events/new">CREATE EVENT</a></li>
          </ul>

        </nav>
      </header>
    );
  }

}

export default NavBar;
