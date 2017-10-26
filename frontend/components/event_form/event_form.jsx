import React from 'react';
import EventApiUtil from '../../util/event_api_util';

class EventForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.event;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount(){
    if(this.props.match.params.eventId){
      this.props.fetchEvent(this.props.event.id);
    }
  }

  componentWillReceiveProps(newProps){
    this.setState(newProps.event);
  }

  handleInput(field){
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e){
    // this.props.action(this.state);

    const formData = new FormData();
    formData.append("event[title]", this.state.title);
    if (this.state.imageFile) formData.append("event[imageFile]", this.state.imageFile);
    EventApiUtil.action(formData);
  }

  render(){

    return(
      <div>
        <form>
          <div>
            <span>1</span>
            <h1>Event Details</h1>
          </div>

          <label>EVENT TITLE</label>
          <input type="text"></input>
          <br></br>

          <label>LOCATION</label>
          <input type="text"></input>
          <br></br>

          <label>STARTS</label>
          <input type="date"></input>
          <input list="event-form-times" name="event-form-times"></input>
          <datalist id="event-form-times">
            <option value="12:00AM"></option>
            <option value="12:30AM"></option>
          </datalist>

          <label>ENDS</label>
          <input type="date"></input>
          <input list="event-form-times" name="event-form-times"></input>
          <datalist id="event-form-times">
            <option value="12:00AM"></option>
            <option value="12:30AM"></option>
          </datalist>
          <br></br>

          <label>EVENT IMAGE</label>
          <input type="file" onChange={this.updateFile}/>
          <img src={this.state.imageUrl}/>
          <br></br>

          <label>EVENT DESCRIPTION</label>
          <textarea></textarea>
          <br></br>

          <label>ORGANIZER NAME</label>
          <input type="text"></input>
          <br></br>

          <label>ORGANIZER DESCRIPTION</label>
          <textarea></textarea>

          <div>
            <span>2</span>
            <h1>Create Tickets</h1>
          </div>
          <p>What type of ticket would you like to start with?</p>
          <button>FREE TICKET</button>
          <button>PAID TICKET</button>
          <button>DONATION</button>

          <div>
            <span>3</span>
            <h1>Additional Settings</h1>
          </div>
          <label>LISTING PRIVACY</label>
          <ul>
            <li><input type="radio" name="privacy"/>Public page</li>
            <li><input type="radio" name="privacy"/>Private page</li>
          </ul>
          <label>EVENT TYPE</label>
          <select>
            <option value="Class">Class</option>
            <option value="Party">Party</option>
          </select>
          <br></br>

          <label>EVENT TOPIC</label>
          <select>
            <option value="Business">Business</option>
            <option value="Music">Music</option>
          </select>
          <br></br>

          <label>REMAINING TICKETS</label>
          <input type="checkbox" name="remaining_tickets"></input>
        </form>
      </div>
    );
  }

}

export default EventForm;
