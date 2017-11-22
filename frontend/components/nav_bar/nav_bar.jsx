import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component{

  demoLogin(e){
    e.preventDefault();
    const user = {email: "demo@gmail.com", password: "password"};
    this.props.login(user);
  }

  render(){
    const signinLogout = this.props.currentUser ?
    <li>
      <a href="/">{this.props.currentUser.first_name.toUpperCase()} <i className="fa fa-angle-down fa-lg" aria-hidden="true"></i>
      </a>
      <ul className="login-signup-dropdown">
        <li><a href={`/#/users/${this.props.currentUser.id}`}>
          {`Tickets ${this.props.currentUser.tickets !== undefined ?
            Object.values(this.props.currentUser.tickets).length : ""}`}
        </a></li>
        <li><a href={`/#/users/${this.props.currentUser.id}`}>
          {`Saved ${this.props.currentUser.saved_events !== undefined ?
            Object.values(this.props.currentUser.saved_events).length : ""}`}</a></li>
        <li><a href={"/#/myevents"}>Manage Events</a></li>
        <li><a onClick={this.props.logout}>Log out</a></li>
      </ul>
    </li>
    :
    <li><a href="#/signin">SIGN IN</a></li>

    const demo = this.props.currentUser ?
    null
    :
    <li><button onClick={(e) => this.demoLogin(e)}>DEMO</button></li>;

    return (
      <header className="login-signup-header">
        <nav className="login-signup-nav">

          <h1 className="login-signup-logo">
            <a href="#" >Happeningbrite</a>
          </h1>

          <ul className="login-signup-header-list">
            <li><a href="/#/events">BROWSE EVENTS</a></li>
            {demo}
            {signinLogout}
            <li><a href="/#/events/new">CREATE EVENT</a></li>
          </ul>

        </nav>
      </header>
    );
  }

}

export default NavBar;
