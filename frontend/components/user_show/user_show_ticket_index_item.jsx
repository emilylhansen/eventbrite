import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const convertDateTime = dateTime => {
  const arr = dateTime.split(/-|T|:|\./);
  const dateArr = new Date(arr[0], arr[1], arr[2],
    arr[3], arr[4], arr[5]).toString().split(" ");
  const timeArr = dateArr[4].split(":");
  const newDate = `${dateArr[0]}, ${dateArr[1]} ${dateArr[2]} ${timeArr[0]}:${timeArr[1]}`;
  return newDate.toUpperCase();
};

const UserShowTicketIndexItem = ({ticket, currentUser}) => {
  return (
    <li>
      <div>

        <div>
          <img scr={ticket.avatar_url}/>
        </div>

        <div>

          <h2></h2>

          <h1>
            <a src={`/#/events/${ticket.id}`}>
              {ticket.title}
            </a>
          </h1>

          <h3>
            {`Ticket order #${ticket.ticket_id} purchased on ${ticket.created_at}`}
          </h3>
        </div>
      </div>
    </li>
  );
};

export default UserShowTicketIndexItem;
