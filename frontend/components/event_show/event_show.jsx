import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';
import PageFooter from "../footer/footer";

class EventShow extends React.Component {

  constructor(props){
    super(props);
    this.state;

    // this.findUser = this.findUser.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.convertDateTime = this.convertDateTime.bind(this);
    this.convertPrice = this.convertPrice.bind(this);
  }
  componentDidMount(){

    this.props.fetchEvent(this.props.eventId);
    this.props.fetchUsers();

  }

  handleSave(e){
    if(this.props.current_user){
      if (document.getElementById(`${e.target.id}`).classList.contains("fa-bookmark-o")){
        document.getElementById(`${e.target.id}`).classList.remove("fa-bookmark-o");
        document.getElementById(`${e.target.id}`).classList.add("fa-bookmark");
        this.props.createSavedEvent({user_id: this.props.current_user.id, event_id: e.target.id});
      } else {
        document.getElementById(`${e.target.id}`).classList.remove("fa-bookmark");
        document.getElementById(`${e.target.id}`).classList.add("fa-bookmark-o");
        this.props.deleteSavedEvent(this.props.current_user.saved_events[e.target.id].saved_event_id);
      }
    } else {
      this.props.history.push('/signin');
    }
  }

  handleRegister(){
    if(this.props.current_user){
      this.props.createTicket({
        purchaser_id: this.props.current_user.id,
        event_id: this.props.event.id
      });
    } else {
      this.props.history.push('/signin');
    }
  }

  convertDateTime(dateTime){
    const arr = dateTime.split(/-|T|:|\./);
    const dateArr = new Date(arr[0], arr[1], arr[2],
      arr[3], arr[4], arr[5]).toString().split(" ");
    const timeArr = dateArr[4].split(":");
    const newDate = `${dateArr[0]} ${dateArr[2]}`;
    const newDate2 = `${dateArr[0]}, ${dateArr[1]} ${dateArr[2]}, ${dateArr[3]}, ${dateArr[4]}`;
    return {newDateTop: newDate.toUpperCase(), newDateBottom: newDate2.toUpperCase()};
  }

  convertPrice(price){
    const newPrice = price.toString().split(".");
    if (price === 0){
      return "FREE";
    } else if (newPrice.length === 1){
      return `${newPrice[0]}.00`;
    } else if (newPrice[1].length === 1){
      return `${price.toString()}0`;
    } else {
      return `${price.toString()}`;
    }
  }

  render(){
    if (this.props.event === undefined){
      return null;
    } else {

      if(document.getElementById(`${this.props.event.id}`)){
        if(this.props.event.current_user_saved){
          document.getElementById(`${this.props.event.id}`).classList.remove("fa-bookmark-o");
          document.getElementById(`${this.props.event.id}`).classList.add("fa-bookmark");
        }
      }

      this.state = {
        current_user_saved: this.props.event.current_user_saved
      };


      const attendees = this.props.event.attendees === undefined ?
      null
      :
      Object.values(this.props.event.attendees).map( attendee => (
        <li key={attendee.id}>{attendee.purchaser_name}</li>
      ));

      const num_tickets = this.props.event.attendees === undefined ?
      this.props.event.num_tickets
      :
      this.props.event.num_tickets - Object.keys(this.props.event.attendees).length;


      let savedColor = this.state.savedColor ? "white" : "#0091DA";

      let registerText = "REGISTER";
      if(this.props.current_user){
        Object.values(this.props.current_user.tickets).map(ticket => {
          if(ticket.event_id === this.props.event.id){
            registerText = "REGISTER MORE TICKETS";
          }
        });
      }

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
                  <p>{this.convertDateTime(this.props.event.start_date_time).newDateTop}</p>
                  <h1>{this.props.event.title}</h1>
                  <h3><a>by {this.props.event.organizer_name}</a></h3>
                  <span>{this.convertPrice(this.props.event.price)}</span>
                </div>
              </div>
            </div>

            <div className="event-show-tickets-background">
              <div className="event-show-tickets">
                <div className="event-show-tickets-top">
                  <i className="fa fa-bookmark-o fa-lg"
                    aria-hidden="true"
                    id={`${this.props.event.id}`}
                    onClick={(e) => this.handleSave(e)}
                    ></i>
                </div>
                <div className="event-show-tickets-bottom">
                  <button onClick={this.handleRegister}>
                    {registerText}
                  </button>
                </div>
              </div>
            </div>

            <div className="event-show-bottom">
              <div className="event-show-bottom-left">
                <h1>DESCRIPTION</h1>
                <div className="event-show-bottom-left-description">
                  <p>{this.props.event.description}</p>
                </div>

                <h1>TAGS</h1>
                <div className="event-show-tags">
                  <div className="event-show-tags-category">
                    <h2>
                      <Link
                        to={{pathname: `/events/category/${Object.values(this.props.event.category)[0].name.split(" & ").join("-and-").toLowerCase()}`,
                        state:{category: `${Object.values(this.props.event.category)[0].name}`}}}
                        value={`${Object.values(this.props.event.category)[0].name}`} >
                        {Object.values(this.props.event.category)[0].name}
                      </Link>
                    </h2>
                  </div>
                  <div className="event-show-tags-event-type">
                    <h2>
                      <Link
                        to={{pathname: `/events/event-type/${Object.values(this.props.event.eventType)[0].name.split(" & ").join("-and-").toLowerCase()}`,
                        state:{eventType: `${Object.values(this.props.event.eventType)[0].name}`}}}
                        value={`${Object.values(this.props.event.eventType)[0].name}`} >
                        {Object.values(this.props.event.eventType)[0].name}
                      </Link>
                    </h2>
                  </div>
                </div>
              </div>

              <div className="event-show-bottom-right">
                <h1>DATE AND TIME</h1>
                <p>
                  {this.convertDateTime(this.props.event.start_date_time).newDateBottom} -
                  <br></br>
                  {this.convertDateTime(this.props.event.end_date_time).newDateBottom}
                </p>
                <h1>LOCATION</h1>
                <p>
                  {this.props.event.location}
                </p>
                <h1>REMAINING TICKETS</h1>
                <p>
                  {num_tickets}
                </p>
                <h1>FRIENDS WHO ARE GOING</h1>
                <div className="event-show-bottom-right-attendees">
                  <ul>
                    {attendees}
                  </ul>
                </div>
              </div>
            </div>

          </div>
          <PageFooter/>
        </div>
      );
    }
  }
}

export default EventShow;
