import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component{

  render(){
    const signinLogout = this.props.currentUser ?
    <li>
      <a href="/">{this.props.currentUser.first_name.toUpperCase()}</a>
      <ul className="login-signup-dropdown">
        <li><Link to="/">Tickets</Link></li>
        <li><Link to="/">Saved</Link></li>
        <li><button onClick={this.props.logout}>Log out</button></li>
      </ul>
    </li>
    :
    <li><a href="#/signin">SIGN IN</a></li>

    return (
      <header className="login-signup-header">
        <nav className="login-signup">

          <h1 className="header-logo">
            <a href="#" >Happeningbrite</a>
          </h1>

          <ul className="login-signup-headerlist">
            <li><a href="/">BROWSE EVENTS</a></li>
            {signinLogout}
            <li><a href="/">CREATE EVENT</a></li>
          </ul>

        </nav>
      </header>
    );
  }

}

export default NavBar;
