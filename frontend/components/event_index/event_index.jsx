import React from 'react';

import NavBarContainer from '../nav_bar/nav_bar_container';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component{

  componentDidMount(){
    this.props.fetchEvents();
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

    return (
      <div className="event-index-main-page">
      <NavBarContainer/>
      <div className="event-index-background">

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
