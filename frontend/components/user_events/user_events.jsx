import React from 'react';
import { Link } from 'react-router-dom';

import NavBarContainer from '../nav_bar/nav_bar_container';
import PageFooter from "../footer/footer";

class UserEvents extends React.Component {

  constructor(props){
    super(props);

  }
  componentDidMount(){

  }

  convertDateTime(dateTime) {
    const arr = dateTime.split(/-|T|:|\./);
    const dateArr = new Date(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]).toString().split(" ");
    const timeArr = dateArr[4].split(":");
    const newDate = `${dateArr[0]}, ${dateArr[1]} ${dateArr[2]} ${timeArr[0]}:${timeArr[1]}`;
    return newDate.toUpperCase();
  }

  render(){
    const events = Object.values(this.props.currentUser.organized_events).map(event => (
      <li key={event.id}>
        <h1>
          <a href={`/#/events/${event.id}`}>
            {event.title}
          </a>
        </h1>
        <h2>
          {this.convertDateTime(event.start_date_time)}
        </h2>
        <a href={`/#/events/${event.id}/edit`} className="user-events-list-edit">
          <i className="fa fa-pencil" aria-hidden="true"></i> Edit</a>
      </li>
    ));
    return (
      <div>
        <NavBarContainer/>
        <div className="user-events-background"></div>
        <div className="user-events-main-wrapper">
          <div className="user-events-main">
            <h1>Manage Events</h1>

            <ul className="user-events-live-list">
              <li>
                {`LIVE ${Object.values(this.props.currentUser.organized_events).length}`}
              </li>
            </ul>

            <ul className="user-events-list">
              {events}
            </ul>
          </div>

        </div>
        <PageFooter/>
      </div>
    );
  }


}

export default UserEvents;
