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
  const dateArr = new Date(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]).toString().split(" ");
  const timeArr = dateArr[4].split(":");
  const newDate = `${dateArr[0]}, ${dateArr[1]} ${dateArr[2]} ${timeArr[0]}:${timeArr[1]}`;
  return newDate.toUpperCase();
};

const handleSave = (event, createSavedEvent, deleteSavedEvent, currentUser) => {

  if (event.current_user_saved === false){
    createSavedEvent({user_id: currentUser.id, event_id: event.id});
  } else {
    deleteSavedEvent(currentUser.saved_events[event.id].saved_event_id);
  }
};

const UserShowIndexItem = ({ event, createSavedEvent, deleteSavedEvent, currentUser}) => {
  // debugger
  const newPrice = convertPrice(event.price);
  return (
    <li className="user-index-item-li">
      <div className="user-index-item-main">
        <div className="user-index-item-info-left">
          <p>{newPrice}</p>
        </div>

          <div className="user-index-item-img-left">
            <a>
              <img src={event.avatar_url} />
            </a>
          </div>


          <div className="user-index-item-img-right">
            <h2>{convertDateTime(event.start_date_time)}</h2>
            <h1><a href={`/#/events/${event.id}`}>{event.title}</a></h1>
            <h3>{event.location}</h3>
          </div>

          <div className="user-index-item-info-right">
            <span>tags go here</span>
            <div className="glyphicon"
              onClick={(e) => handleSave(event, createSavedEvent, deleteSavedEvent, currentUser)}
              ></div>
          </div>

      </div>
    </li>
  );
};

export default withRouter(UserShowIndexItem);

















// comment
