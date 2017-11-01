import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';

class UserEvents extends React.Component {

  constructor(props){
    super(props);

  }
  componentDidMount(){

  }


  render(){

    return (
      <div>
        <NavBarContainer/>
        <div>
          <h1>Manage Events</h1>
          <ul>
            <li>
              LIVE {this.props.currentUser.}
            </li>
          </ul>
        </div>
      </div>
    );
  }


}

export default UserEvents;
