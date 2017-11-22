import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import UserShowTicketIndexItem from './user_show_ticket_index_item';

const UserShowTicketIndex = ({activeComponent, currentUser, outer, history}) => {
  const items = currentUser.tickets !== undefined ?
  Object.values(currentUser.tickets).map(ticket => (
    <UserShowTicketIndexItem
      key={ticket.id}
      ticket={ticket}
      currentUser={currentUser}
      />
  )) : "" ;

  if(activeComponent === 0) {
    return (
      <div>
        <div className="user-show-ticket-index-main">
          <ul>
            {items}
          </ul>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default withRouter(UserShowTicketIndex);

















// comment
