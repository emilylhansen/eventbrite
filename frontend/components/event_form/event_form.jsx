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
      this.category  = this.props.category;
      this.eventType = this.props.eventType;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  componentDidMount(){
    this.props.fetchCategories();
    this.props.fetchEventTypes();
    // this.props.fetchEvents();

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

    delete this.state["category"];
    delete this.state["current_user_saved"];
    delete this.state["eventType"];
    delete this.state["attendees"];
    // delete this.state["id"];
    delete this.state["avatar_file_name"];
    delete this.state["avatar_url"];
    delete this.state["eventCategory"];
    delete this.state["eventEventType"];

    const formData = new FormData();
    Object.keys(this.state).map(col => {
      if (col === "avatarFile" || col === "avatarUrl"){return;}
      return formData.append(`event[${col}]`, this.state[col]);
    });
    if (this.state.avatarFile) {
      formData.append("event[avatar]", this.state.avatarFile);
    }

    const category_id = this.findCategoryId();
    const event_type_id = this.findEventTypeId();
    if(this.props.match.path === '/events/new'){
      this.props.action(formData, this.goBack).then(
        ({event}) => {
        this.props.createEventCategory({event_id: event.id, category_id: category_id});
        this.props.createEventEventType({event_id: event.id, event_type_id: event_type_id});
      });
    } else {
      this.props.action(formData, this.goBack);
    }
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

    let eventTypeOpts = this.props.eventTypes.map((eventType, i) => {
      return <option key={i} value={`${eventType.name}`}>{eventType.name}</option>;
    });

    let categoryOpts = this.props.categories.map((category, i) => {
      return <option key={i} value={`${category.name}`}>{category.name}</option>;
    });

    let text = this.props.formType === "new" ? "Create an Event" : "Edit Your Event";

    return(
      <div>
        <NavBarContainer/>
        <div className="event-form-create">
          <h1>{text}</h1>
        </div>
        <div className="event-form-step"></div>
        <div className="event-form-background"></div>
          <form onSubmit={this.handleSubmit} className="event-form-form">
            <div className="event-form-main-page">
            <div>
              <div className="event-form-one">
                <span>1</span>
                <h1>Event Details</h1>
              </div>

              <label>EVENT TITLE</label>
                <br></br>
                <input type="text"
                  placeholder="Give it a short distinct name"
                  value={this.state.title}
                  onChange={this.handleInput('title')}
                  />
                <br></br>

              <label>LOCATION</label>
                <br></br>
                <input type="text"
                  placeholder="Specify where it's held"
                  value={this.state.location}
                  onChange={this.handleInput('location')}
                  />
                <br></br>

              <div className="event-form-timedates">
                <div className="event-form-timedates-start">
                <label>STARTS</label>
                <br></br>
                <div className="event-form-timedates-start-top">
                  <input type="date"
                    min={this.props.currentDate}
                    onChange={this.handleInput('startDate')}
                    />
                  <input list="times" name="times"/>
                  <datalist id="times"
                    value={this.dateTime.startTime}
                    onChange={this.handleInput('startTime')}
                    >
                    {timeOpts}
                  </datalist>
                </div>
              </div>

              <div className="event-form-timedates-end">
                <label>ENDS</label>
                <br></br>
                <div className="event-form-timedates-end-top">
                  <input type="date"
                    min={this.props.currentDate}
                    onChange={this.handleInput('endDate')}
                    />
                  <input list="times" name="times"/>
                    <datalist id="times"
                      value={this.dateTime.endTime}
                      onChange={this.handleInput('endTime')}
                      >
                      {timeOpts}
                    </datalist>
                </div>
              </div>
              </div>

              <label>EVENT IMAGE</label>
                <br></br>
                <input className="event-form-image-input" id="file" type="file" name="file" onChange={this.updateFile}/>
                <div className="event-form-image-input-label-div">
                  <label className="event-form-image-input-label" htmlFor="file">
                  <i className="fa fa-camera" aria-hidden="true"></i> ADD EVENT IMAGE
                    <img className="event-form-image" src={this.state.avatarUrl}/>
                  </label>
                </div>
                <br></br>

              <label>EVENT DESCRIPTION</label>
                <br></br>
                <textarea value={this.state.description}
                  cols="75" rows="10"
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
                  cols="75" rows="1"
                  onChange={this.handleInput('organizer_description')}
                  />

              <div className="event-form-two">
                <span>2</span>
                <h1>Create Tickets</h1>
              </div>

              <br></br>
              <label>Quantity available</label>
              <br></br>
              <input type="text"
                value={this.state.num_tickets}
                onChange={this.handleInput("num_tickets")}
                />
              <br></br>
              <label>Price</label>
              <br></br>
              <input type="text"
                value={this.state.price}
                onChange={this.handleInput("price")}
                />

              <div className="event-form-three">
                <span>3</span>
                <h1>Additional Settings</h1>
              </div>

              <label>EVENT TYPE</label>
                <br></br>
                <select value={this.eventType}
                  className="event-type-select"
                  onChange={this.handleInput('eventType')}
                  >
                  <option>Select the type of event</option>
                  {eventTypeOpts}
                </select>
                <br></br>

              <label>EVENT TOPIC</label>
                <br></br>
                <select value={this.category}
                  className="event-topic-select"
                  onChange={this.handleInput('category')}
                  >
                  <option>Select a topic</option>
                  {categoryOpts}
                </select>
                <br></br>



                {this.renderErrors()}
            </div>
          </div>

          <div className="event-form-done">
            <h1>Nice job! You're almost done.</h1>
            <input type="submit" value="MAKE YOUR EVENT LIVE"/>
          </div>

        </form>
      </div>
    );

  }

}

export default EventForm;
