import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const convertPrice = (price) => {
  const newPrice = price.toString().split(".");
  if (price === 0){
    return "FREE";
  } else if (newPrice.length === 1){
    return `$${newPrice[0]}.00`;
  } else if (newPrice[1].length === 1){
    return `$${price.toString()}0`;
  } else {
    return `$${price.toString()}`;
  }
};

const convertDateTime = dateTime => {
  const arr = dateTime.split(/-|T|:|\./);
  const dateArr = new Date(arr[0], arr[1], arr[2],
    arr[3], arr[4], arr[5]).toString().split(" ");
  const timeArr = dateArr[4].split(":");
  const newDate = `${dateArr[0]}, ${dateArr[1]} ${dateArr[2]} ${timeArr[0]}:${timeArr[1]}`;
  return newDate.toUpperCase();
};

const handleSave = (event, createSavedEvent, deleteSavedEvent, currentUser) => {
  // debugger
  if (event.current_user_saved === false){
    createSavedEvent({user_id: currentUser.id, event_id: event.id});
  } else {
    deleteSavedEvent(currentUser.saved_events[event.id].saved_event_id);
  }
};

const EventIndexItem = ({ event, createSavedEvent, deleteSavedEvent, currentUser, outer, history}) => {
  const newPrice = convertPrice(event.price);
  return (
    <li className="event-index-item-li">
      <div className="event-index-item-main">

        <div className="event-index-item-img">
          <div className="event-index-item-img-left">
            <a>
              <img src={event.avatar_url} />
            </a>
          </div>

          <div className="event-index-item-img-right">
            <h2>{convertDateTime(event.start_date_time)}</h2>
            <h1><a href={`/#/events/${event.id}`}>{event.title}</a></h1>
            <h3>{event.location}</h3>
          </div>
        </div>

        <div className="event-index-item-info">
          <div className="event-index-item-info-left">
            <p>{newPrice}</p>
          </div>

          <div className="event-index-item-info-right">
            <span>{`#${Object.values(event.category)[0].name}`} {`#${Object.values(event.eventType)[0].name}`}</span>
            <div className="glyphicon"
              onClick={(e) => handleSave(event, createSavedEvent, deleteSavedEvent, currentUser)}
              ></div>
          </div>
        </div>

      </div>
    </li>
  );
};

export default withRouter(EventIndexItem);

















// comment
