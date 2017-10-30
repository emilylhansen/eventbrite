import React from 'react';
import EventApiUtil from '../../util/event_api_util';
import NavBarContainer from "../nav_bar/nav_bar_container";

class EventForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.event;
    this.dateTime = {
      startDate: this.props.dateTime.startDate,
      startTime: this.props.dateTime.startTime,
      endDate: this.props.dateTime.endDate,
      endTime: this.props.dateTime.endTime
    };

    // if(this.props.category === undefined){
    //   this.category = Object.values(state.entities.categories)[0].name;
    // }
    this.category  = this.props.category;
    this.eventType = this.props.eventType;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount(){
    this.props.fetchCategories();
    this.props.fetchEventTypes();

    if(this.props.match.params.eventId){
      this.props.fetchEvent(this.props.match.params.eventId);
    }
  }

  componentWillReceiveProps(newProps){
    this.setState(newProps.event);
  }

  handleInput(field){
    if (Object.keys(this.dateTime).includes(field)){
      return (e) => {
        this.dateTime[field] = e.target.value;
      };
    } else if (field === 'category'){
      return (e) => {
        this.category = e.target.value;
      };
    } else if (field === 'eventType'){
        return (e) => {
          this.eventType = e.target.value;
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
      this.setState({ avatarFile: file, avatarUrl: fileReader.result });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  findCategoryId(){
    for(let i = 0; i < this.props.categories.length; i++){
      if (this.props.categories[i].name === this.category){
        return this.props.categories[i].id;
      }
    }
  }

  findEventTypeId(){
    for(let i = 0; i < this.props.eventTypes.length; i++){
      if (this.props.eventTypes[i].name === this.eventType){
        return this.props.eventTypes[i].id;
      }
    }
  }

  combineDateTime(){
    const startDateTime = this.dateTime.startDate
                        + " " + this.dateTime.startTime;
    const endDateTime = this.dateTime.endDate
                      + " " + this.dateTime.endTime;
    this.state.start_date_time = startDateTime;
    this.state.end_date_time = endDateTime;
  }

  handleSubmit(e){
    e.preventDefault();

    this.combineDateTime();

    const formData = new FormData();
    Object.keys(this.state).map(col => {
      return formData.append(`event[${col}]`, this.state[col]);
    });
    if (this.state.avatarFile) {
      formData.append("event[avatar]", this.state.avatarFile);
    }
    this.props.action(formData, this.goBack).then(
      event => this.props.createEventCategory({event_id: 10, category_id: this.findCategoryId()})).then (
      event => this.props.createEventEventType({event_id: 10, event_type_id: this.findEventTypeId()})
    );
  }

  goBack(){
    this.props.history.push("/");
  }

  renderErrors() {
    const errs = this.props.errors.map((error, i) => (
      <li key={i}>
        {error}
      </li>
    ));

    return(
      <ul>
        {errs}
      </ul>
    );
  }

  getTimeOpts(){
    let timeOptions = [];
    for(let i = 0; i < 24 ;i++){
      let hr = i;
      if ( i < 10) { hr = '0' + i;}
      timeOptions.push(<option key={i} value={`${hr}:00:00`}>{`${hr}:00:00`}</option>);
      timeOptions.push(<option key={24+i} value={`${hr}:30:00`}>{`${hr}:30:00`}</option>);
    }

    return timeOptions;
  }

  render(){
    let timeOpts = this.getTimeOpts().map(opt => {
      return opt;
    });

    // let eventTypeOpts = this.props.eventTypes.map((eventType, i) => {
    //   return <option key={i} value={`${eventType.name}`}>{eventType.name}</option>;
    // });
    //
    // let categoryOpts = this.props.categories.map((category, i) => {
    //   return <option key={i} value={`${category.name}`}>{category.name}</option>;
    // });

    return(
      <div>
        <NavBarContainer/>

        <div className="event-form-main-page">
          <form onSubmit={this.handleSubmit}>
            <div>
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
                  onChange={this.handleInput('startDate')}
                  />
                <select value={this.dateTime.startTime}
                  onChange={this.handleInput('startTime')}
                  >
                  {timeOpts}
                </select>
                <br></br>

              <label>ENDS</label>
                <br></br>
                <input type="date"
                  onChange={this.handleInput('endDate')}
                  />
                <select value={this.dateTime.endTime}
                  onChange={this.handleInput('endTime')}
                  >
                  {timeOpts}
                </select>
                <br></br>

              <label>EVENT IMAGE</label>
                <br></br>
                <input type="file" onChange={this.updateFile}/>
                <img src={this.state.avatarUrl}/>
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
                <select value={this.eventType}
                  onChange={this.handleInput('eventType')}
                  >

                </select>
                <br></br>

              <label>EVENT TOPIC</label>
                <br></br>
                <select value={this.category}
                  onChange={this.handleInput('category')}
                  >
                  
                </select>
                <br></br>

              <label>REMAINING TICKETS</label>
                <br></br>
                <input type="checkbox" name="remaining_tickets"></input>
                <br></br>

              <input type="submit" value="MAKE YOUR EVENT LIVE"/>

              {this.renderErrors()}

            </div>
          </form>
        </div>
      </div>
    );
  }

}

export default EventForm;
