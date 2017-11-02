import React from 'react';

import { Link } from 'react-router-dom';

import NavBarContainer from '../nav_bar/nav_bar_container';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component{

  componentDidMount(){
    this.props.fetchCategories();
    this.props.fetchEventTypes();

    if(this.props.match.params.categoryName){
      // debugger
      this.props.fetchByCategory({name: this.props.match.params.categoryName});
    } else if (this.props.match.params.eventTypeName){
      this.props.fetchByEventType({name: this.props.match.params.eventTypeName});
    } else {
      this.props.fetchEvents();
    }
  }

  componentWillReceiveProps(nextProps){
    if(this.props.match.params.categoryName !== nextProps.match.params.categoryName){
      nextProps.fetchByCategory({name: nextProps.match.params.categoryName});
    } else if (this.props.match.params.eventTypeName !== nextProps.match.params.eventTypeName){
      nextProps.fetchByEventType({name: nextProps.match.params.eventTypeName});
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
         />
    ));

    let eventTypeOpts = this.props.eventTypes.map((eventType, i) => {
      return (
        <div key={i}>
        <Link
          to={{pathname: `/events/event-type/${eventType.name.split(" & ").join("-and-").toLowerCase()}`,
          state:{eventType: `${eventType.name}`}}}
          value={`${eventType.name}`} >
          {eventType.name}
        </Link>

        <br></br>
        </div>
      );

    });

    let categoryOpts = this.props.categories.map((category, i) => {
      return(
        <div key={i}>
        <Link
          to={{pathname: `/events/category/${category.name.split(" & ").join("-and-").toLowerCase()}`,
          state:{category: `${category.name}`}}}
          value={`${category.name}`} >
          {category.name}
        </Link>

        <br></br>
        </div>
      );

    });

    return (
      <div className="event-index-main-page">
      <NavBarContainer/>
      <div className="event-index-background">

      </div>

      <div>
        <div>
          {eventTypeOpts}
        </div>
        <br></br>
        <div>
          {categoryOpts}
        </div>
      </div>

      <div className="event-index-content">
        <div className="event-index-main">

          <div className="event-index-info">
            <h1>Events For You</h1>
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
            {items}
          </ul>
        </div>
      </div>
      </div>
    );
  }
}

export default EventIndex;
