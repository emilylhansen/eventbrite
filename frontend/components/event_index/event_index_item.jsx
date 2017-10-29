import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const convertPrice = (price) => {
  const newPrice = price.toString().split(".");
  if (price === 0){
    return "FREE";
  } else if (newPrice.length === 1){
    return `$${newPrice[0]}.00`;
  } else if (newPrice[1].length === 1){
    return `$${price.toString()}.0`;
  } else {
    return `$${price.toString()}`;
  }
};

const EventIndexItem = ({ event, router, history}) => {
  const newPrice = convertPrice(event.price);
  return (
    <li className="event-index-item-li">
      <div className="event-index-item-main">
        <div className="event-index-item-img-div">
          <a>
            <img src={window.img_leaf} />
          </a>
          <p>{newPrice}</p>
        </div>
        <div className="event-index-item-info">
          <h2>{event.start_date_time}</h2>
          <h1><a href={`/#/events/${event.id}`}>{event.title}</a></h1>
          <h3>{event.lat} {event.lng}</h3>
          <span>tags go here</span>
        </div>
      </div>
    </li>
  );
};

export default withRouter(EventIndexItem);
