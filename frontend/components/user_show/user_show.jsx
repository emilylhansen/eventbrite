import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';
import UserShowIndex from './user_show_index';

class UserShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      borderColor: true
    };
    this.changeSection = this.changeSection.bind(this);
  }

  changeSection(e){
    this.setState({borderColor: !this.state.borderColor});
  }

  render(){
    let borderColor = this.state.borderColor ? "white" : "#0091DA";

    return (
      <div>
        <NavBarContainer/>
        <div className="user-show-background"></div>
        <div className="user-show-header">
          <h1>
            {this.props.currentUser.first_name} {this.props.currentUser.last_name}
          </h1>
          <ul>
            <li value="upcomingEvents"
              onClick={(e) => this.changeSection()}
              style={{borderBottom: `4px solid ${borderColor}`}}
              >
              <span></span>
              <br></br>
              <span>UPCOMING EVENTS</span>
            </li>
            <li value="savedEvents"
              onClick={(e) => this.changeSection()}
              style={{borderBottom: `4px solid ${borderColor}`}}
              >
              <span>{Object.values(this.props.currentUser.saved_events).length}</span>
              <br></br>
              <span>SAVED EVENTS</span>
            </li>
            <li value="pastEvents"
              onClick={(e) => this.changeSection()}
              style={{borderBottom: `4px solid ${borderColor}`}}
              >
              <span></span>
              <br></br>
              <span>PAST EVENTS</span>
            </li>
          </ul>
        </div>
        <div>
          <UserShowIndex
            currentUser={this.props.currentUser}
            deleteSavedEvent={this.props.deleteSavedEvent}
            createSavedEvent={this.props.createSavedEvent}
            />
        </div>

        <div className="user-show-background"></div>
      </div>
    );
  }
}

export default UserShow;
