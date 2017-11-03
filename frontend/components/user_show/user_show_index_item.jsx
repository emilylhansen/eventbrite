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
    // debugger
    createSavedEvent({user_id: currentUser.id, event_id: event.event_id});
  } else {
    // debugger
    deleteSavedEvent(event.saved_event_id);
  }
};
// <p>{newPrice}</p>

const UserShowIndexItem = ({ event, createSavedEvent, deleteSavedEvent, currentUser}) => {
  const newPrice = convertPrice(event.price);
  return (
    <div className="user-index-item-li">
      <div className="user-index-item-main">
        <div className="user-index-item-info-left">
        </div>

          <div className="user-index-item-img-left">
            <div className="user-index-item-img-left-inner">
              <a>
                <img src={event.avatar} />
              </a>
            </div>
          </div>


          <div className="user-index-item-img-right">
            <h2>{convertDateTime(event.start_date_time)}</h2>
            <h1><a href={`/#/events/${event.event_id}`}>{event.title}</a></h1>
            <h3>{event.location}</h3>
          </div>

          <div className="user-index-item-info-right">
            <div className="user-index-item-info-right-span-tags">
              <span>{`#${Object.values(event.category)[0].name}`} {`#${Object.values(event.eventType)[0].name}`}</span>
            </div>
            <div className="user-index-item-info-right-glyph">
            <div className="glyphicon"
              onClick={(e) => handleSave(event, createSavedEvent, deleteSavedEvent, currentUser)}
            ></div>
            </div>
          </div>

      </div>
    </div>
  );
};

export default withRouter(UserShowIndexItem);

















// comment
