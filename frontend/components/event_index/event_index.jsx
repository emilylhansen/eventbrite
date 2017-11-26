import React from 'react';
import { Link } from 'react-router-dom';

import NavBarContainer from '../nav_bar/nav_bar_container';
import EventIndexItem from './event_index_item';
import PageFooter from "../footer/footer";

class EventIndex extends React.Component{

  componentDidMount(){
    this.props.fetchCategories();
    this.props.fetchEventTypes();
    if(this.props.match.params.categoryName){
      this.props.fetchByCategory({name: this.props.match.params.categoryName});
    } else if (this.props.match.params.eventTypeName){
      this.props.fetchByEventType({name: this.props.match.params.eventTypeName});
    } else {
      this.props.fetchEvents();
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.match.params.categoryName &&
      (this.props.match.params.categoryName !== nextProps.match.params.categoryName)){
      nextProps.fetchByCategory({name: nextProps.match.params.categoryName});
    } else if (nextProps.match.params.eventTypeName &&
      (this.props.match.params.eventTypeName !== nextProps.match.params.eventTypeName)){
      nextProps.fetchByEventType({name: nextProps.match.params.eventTypeName});
    }
  }

  toggleSelections(field, angle){
    document.getElementById(field).classList.toggle("show");
    if (document.getElementById(angle).classList.contains("fa-angle-down")){
      document.getElementById(angle).classList.remove("fa-angle-down");
      document.getElementById(angle).classList.add("fa-angle-up");
    } else {
      document.getElementById(angle).classList.remove("fa-angle-up");
      document.getElementById(angle).classList.add("fa-angle-down");
    }
  }

  render(){
    const items = this.props.events.map(event => (
      <EventIndexItem
        key={event.id}
        event={event}
        createSavedEvent={this.props.createSavedEvent}
        deleteSavedEvent={this.props.deleteSavedEvent}
        currentUser={this.props.currentUser}
        history={this.props.history}
         />
    ));

    let eventTypeOpts = this.props.eventTypes.map((eventType, i) => {
      return (

        <Link
          key={i}
          to={{pathname: `/events/event-type/${eventType.name.split(" & ").join("-and-").toLowerCase()}`,
          state:{eventType: `${eventType.name}`}}}
          value={`${eventType.name}`} >
          {eventType.name}
        </Link>


      );

    });

    let categoryOpts = this.props.categories.map((category, i) => {
      return(

        <Link
          key={i}
          to={{pathname: `/events/category/${category.name.split(" & ").join("-and-").toLowerCase()}`,
          state:{category: `${category.name}`}}}
          value={`${category.name}`} >
          {category.name}
        </Link>


      );

    });


    return (
      <div className="event-index-main-page">
      <NavBarContainer/>
      <div className="event-index-background">
      <div className="event-index-flex">

      <div>
        <div className="event-index-options-main">
          <div className="event-index-options">
            <div className="event-index-options-event-type">
              <button onClick={(e) => this.toggleSelections("event-index-event-type-dropdown", "event-index-event-type-btn-angle")}
              className="event-index-event-type-btn">
              EVENT TYPE <i className="fa fa-angle-down fa-lg" id="event-index-event-type-btn-angle" aria-hidden="true"></i>
              </button>
              <div id="event-index-event-type-dropdown"
              className="event-index-event-type-dropdown-content"
              >
              {eventTypeOpts}
              </div>
            </div>
            <br></br>
            <div className="event-index-options-category">
              <button onClick={(e) => this.toggleSelections("event-index-category-dropdown", "event-index-category-btn-angle")}
              className="event-index-category-btn">
              CATEGORY <i className="fa fa-angle-down fa-lg" id="event-index-category-btn-angle"aria-hidden="true"></i>
              </button>
              <div id="event-index-category-dropdown"
              className="event-index-category-dropdown-content"
              >
              {categoryOpts}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="event-index-content">
        <div className="event-index-main">
          <div className="event-index-info">
            <h1>New York, NY Events For You</h1>
            <p>Five bustling boroughs make up the powerhouse known as
              New York City. Iconic sites like the Empire State Building
              and the Statue of Liberty draw crowds from across the globe.
              Most New York events feature music, performing & visual
              arts, or food & drink. Enjoy a Broadway show or take a
              stroll through Central Park. Check out the city's many
              events below — there's something for everyone!
            </p>
          </div>

          <ul className="event-index-list">
            {this.props.events.length > 0 ? items : "There are no events for this selection. Please select a different option :)"}
          </ul>
        </div>
      </div>
    </div>
    <PageFooter/>
    </div>
    </div>
    );
  }
}

export default EventIndex;
