import React from 'react';
import { Link } from 'react-router-dom';

import NavBarContainer from '../nav_bar/nav_bar_container';
import UserShowIndex from './user_show_index';
import UserShowTicketIndex from './user_show_ticket_index';
import PageFooter from "../footer/footer";


class UserShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      active: 1,
      activeComponent: 1
    };
    this.toggleSelection = this.toggleSelection.bind(this);
    this.selectionColor = this.selectionColor.bind(this);
    }

  toggleSelection(position, component){
    if (this.state.active === position) {
      this.setState({
        active : null,
        activeComponent: null
      });
    } else {
      this.setState({
        active : position,
        activeComponent: position
      });
    }
  }

  selectionColor(position) {
    if (this.state.active === position) {
      return "#0091DA";
    }
    return "white";
  }

  render(){
    // let borderColor = this.state.borderColor ? "white" : "#0091DA";

    return (
      <div>
        <NavBarContainer/>
        <div className="user-show-background">
        <div className="user-show-header">
          <h1>
            {this.props.currentUser.first_name} {this.props.currentUser.last_name}
          </h1>
          <ul>
            <li value="upcomingEvents"
              onClick={() => this.toggleSelection(0)}
              style={{borderBottom: `4px solid ${this.selectionColor(0)}`}}
              active={this.state.activeComponent}
              >
              <span>{this.props.currentUser.tickets !== undefined ?
                  Object.values(this.props.currentUser.tickets).length : ""}</span>
              <br></br>
              <span>UPCOMING EVENTS</span>
            </li>
            <li value="savedEvents"
              onClick={() => this.toggleSelection(1)}
              style={{borderBottom: `4px solid ${this.selectionColor(1)}`}}
              active={this.state.activeComponent}
              >
              <span>{this.props.currentUser.saved_events !== undefined ?
                  Object.values(this.props.currentUser.saved_events).length : ""}</span>
              <br></br>
              <span>SAVED EVENTS</span>
            </li>
            <li value="pastEvents"
              onClick={() => this.toggleSelection(2)}
              style={{borderBottom: `4px solid ${this.selectionColor(2)}`}}
              >
              <span></span>
              <br></br>
              <span>PAST EVENTS</span>
            </li>
          </ul>
        </div>
        <div>
          <UserShowIndex
            activeComponent={this.state.activeComponent}
            currentUser={this.props.currentUser}
            deleteSavedEvent={this.props.deleteSavedEvent}
            createSavedEvent={this.props.createSavedEvent}
            />
          <UserShowTicketIndex
            activeComponent={this.state.activeComponent}
            currentUser={this.props.currentUser}
            />
        </div>
        <PageFooter/>
        </div>
      </div>
    );
  }
}

export default UserShow;
