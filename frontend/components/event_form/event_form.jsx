import React from 'react';
import EventApiUtil from '../../util/event_api_util';

class EventForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.event;
    this.dateTime = {
      startDate: null,
      startTime: null,
      endDate: null,
      endTime: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount(){
    if(this.props.match.params.eventId){
      this.props.fetchEvent(this.props.match.params.eventId);
    }
  }

  componentWillReceiveProps(newProps){
    this.setState(newProps.event);
  }

  handleInput(field){
    debugger
    const dateTimeArr = ["startDate", "startTime", "endDate", "endTime"];
    if (dateTimeArr.includes(field)){
      return (e) => {
        this.dateTime[field] = e.target.value;
      };
    } else {
      return (e) => {
        this.setState({[field]: e.target.value});
      };
    }
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
    this.props.action(this.state);

    // const formData = new FormData();
    // formData.append("event[title]", this.state.title);
    // if (this.state.imageFile) formData.append("event[imageFile]", this.state.imageFile);
    // EventApiUtil.action(formData);
  }

  render(){
    debugger
    return(
      <div>
        <form>
          <div>
            <span>1</span>
            <h1>Event Details</h1>
          </div>

          <label>EVENT TITLE</label>
            <br></br>
            <input type="text"
              value={this.state.title}
              onChange={this.handleInput('title')}
              />
            <br></br>

          <label>LATITUDE</label>
            <br></br>
            <input type="text"
              value={this.state.lat}
              onChange={this.handleInput('lat')}
              />
            <br></br>

          <label>LONGITUDE</label>
            <br></br>
            <input type="text"
              value={this.state.lng}
              onChange={this.handleInput('lng')}
              />
            <br></br>

          <label>STARTS</label>
            <br></br>
            <input type="date"
              value={this.state.start_date_time}
              onChange={this.handleInput('startDate')}
              />
            <select>
              <option value="12:00:00"
                onChange={this.handleInput('startTime')}
                >12:00:00</option>
              <option value="12:30:00"
                onChange={this.handleInput('startTime')}
                >12:30:00</option>
            </select>
            <br></br>

          <label>ENDS</label>
            <br></br>
            <input type="date"
              value={this.state.end_date_time}
              onChange={this.handleInput('endDate')}
              />
            <select>
              <option value="12:00:00"
                onChange={this.handleInput('endTime')}
                >12:00:00</option>
              <option value="12:30:00"
                onChange={this.handleInput('endTime')}
                >12:30:00</option>
            </select>
            <br></br>

          <label>EVENT IMAGE</label>
            <br></br>
            <input type="file" onChange={this.updateFile}/>
            <img src={this.state.imageUrl}/>
            <br></br>

          <label>EVENT DESCRIPTION</label>
            <br></br>
            <textarea value={this.state.description}
              onChange={this.handleInput('description')}
              />
            <br></br>

          <label>ORGANIZER NAME</label>
            <br></br>
            <input type="text"
              value={this.state.organizer_name}
              onChange={this.handleInput('organizer_name')}
              />
            <br></br>

          <label>ORGANIZER DESCRIPTION</label>
            <br></br>
            <textarea value={this.state.organizer_description}
              onChange={this.handleInput('organizer_description')}
              />

          <div>
            <span>2</span>
            <h1>Create Tickets</h1>
          </div>

          <p>What type of ticket would you like to start with?</p>
          <br></br>
          <button>FREE TICKET</button>
          <button>PAID TICKET</button>
          <button>DONATION</button>
          <br></br>
          <label>Quantity available</label>
          <input type="text"
            value={this.state.num_tickets}
            onChange={this.handleInput("num_tickets")}
            />
          <label>Price</label>
          <input type="text"
            value={this.state.price}
            onChange={this.handleInput("price")}
            />

          <div>
            <span>3</span>
            <h1>Additional Settings</h1>
          </div>

          <label>LISTING PRIVACY</label>
            <br></br>
            <ul>
              <li><input type="radio" name="privacy"/>Public page</li>
              <li><input type="radio" name="privacy"/>Private page</li>
            </ul>

          <label>EVENT TYPE</label>
            <br></br>
            <select>
              <option value="Class">Class</option>
              <option value="Party">Party</option>
            </select>
            <br></br>

          <label>EVENT TOPIC</label>
            <br></br>
            <select>
              <option value="Business" value={this.state.location} onChange={this.handleInput('location')}>Business</option>
              <option value="Music">Music</option>
            </select>
            <br></br>

          <label>REMAINING TICKETS</label>
            <br></br>
            <input type="checkbox" name="remaining_tickets"></input>
        </form>
      </div>
    );
  }

}

export default EventForm;
