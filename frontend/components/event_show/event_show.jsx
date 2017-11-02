import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';

class EventShow extends React.Component {

  constructor(props){
    super(props);
    this.state;

    this.findUser = this.findUser.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }
  componentDidMount(){
    this.props.fetchEvent(this.props.eventId);
    this.props.fetchUsers();
  }

  findUser(id){
    return this.props.users[id].first_name;
  }

  handleSave(){
    this.setState({savedColor: !this.state.borderColor});

    if (this.state.current_user_saved === false){
      this.props.createSavedEvent({
        user_id: this.props.current_user.id,
        event_id: this.props.event.id
      });
    } else {
      // this.setState({savedColor: !this.state.borderColor});
      this.props.deleteSavedEvent(this.props.current_user.saved_events[this.props.event.id].saved_event_id);
    }
  }

  handleRegister(){
    this.props.createTicket({
      purchaser_id: this.props.current_user.id,
      event_id: this.props.event.id
    });
  }

  render(){

    if (this.props.event === undefined){
      return null;
    } else {
      this.state = {
        current_user_saved: this.props.event.current_user_saved,
        savedColor: true
      };
      // const attendeesOpts = Object.values(this.props.event.attendees).map( attendee => (
      //   <li key={attendee.id}>{this.findUser(attendee.purchaser_id)}</li>
      // ));
      let savedColor = this.state.savedColor ? "white" : "#0091DA";
    return (
      <div>
        <NavBarContainer/>
        <div className="event-show-background"></div>
        <div className="event-show-background-img">
          <img src={this.props.event.avatar_url}/>
        </div>
        <div className="event-show-main">

          <div className="event-show-top">
            <div className="event-show-top-left">
              <img src={this.props.event.avatar_url} />
            </div>

            <div className="event-show-top-right-background">
              <div className="event-show-top-right">
                <p>{this.props.event.start_date_time}</p>
                <h1>{this.props.event.title}</h1>
                <h3><a>by {this.props.event.organizer_name}</a></h3>
                <span>{this.props.event.price}</span>
              </div>
            </div>
          </div>

          <div className="event-show-tickets-background">
            <div className="event-show-tickets">
              <div className="glyphicon"
                value={this.state.current_user_saved}
                onClick={this.handleSave}
                style={{backgroundColor:this.state.savedColor}}
                ></div>
              <button onClick={this.handleRegister}>REGISTER</button>
            </div>
          </div>

          <div className="event-show-bottom">
            <div className="event-show-bottom-left">
              <h1>DESCRIPTION</h1>
              <p>{this.props.event.description}</p>
              <h1>TAGS</h1>
              <div className="event-show-tags">
                <div>
                  <h1>
                    {Object.values(this.props.event.category)[0].name}
                  </h1>
                </div>
                <div>
                  <h1>
                    {Object.values(this.props.event.eventType)[0].name}
                  </h1>
                </div>
              </div>
            </div>

            <div className="event-show-bottom-right">
              <h1>DATE AND TIME</h1>
              <p>
                {this.props.event.start_date_time} -
                {this.props.event.end_date_time}
              </p>
              <h1>LOCATION</h1>
              <p>
                {this.props.event.location}
              </p>
              <h1>FRIENDS WHO ARE GOING</h1>
              <ul>
                {Object.keys(this.props.event.attendees).length}
              </ul>
            </div>
          </div>

        </div>

      </div>
    );
  }
  }


}

export default EventShow;
