import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';

class EventShow extends React.Component {

  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.fetchEvent(this.props.eventId);
  }

  render(){
    if (this.props.event === undefined){
      return null;
    } else {

    return (
      <div>
        <NavBarContainer/>
        <div className="event-show-main">

          <div className="event-show-top">
            <div className="event-show-top-left">
              <img src={window.img_leaf} />
            </div>
            <div className="event-show-top-right">
              <p>{this.props.event.start_date_time}</p>
              <h1>{this.props.event.title}</h1>
              <h3>By {this.props.event.organizer_name}</h3>
              <span>{this.props.event.price}</span>
            </div>
          </div>

          <div className="event-show-tickets">
            <button onClick={e => this.props.openModal("tickets")}>TICKETS</button>
          </div>

          <div className="event-show-bottom">
            <div className="event-show-bottom-left">
              <h1>DESCRIPTION</h1>
              <p>{this.props.event.description}</p>
              <h1>TAGS</h1>
            </div>

            <div className="event-show-bottom-right">
              <h1>DATE AND TIME</h1>
              <p>
                {this.props.event.start_date_time} -
                {this.props.event.end_date_time}
              </p>
              <h1>LOCATION</h1>
              <p>
                {this.props.event.lat}
                {this.props.event.lng}
              </p>
            </div>
          </div>

        </div>

      </div>
    );
  }
  }


}

export default EventShow;
