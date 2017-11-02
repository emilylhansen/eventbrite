import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import UserShowTicketIndexItem from './user_show_ticket_index_item';

const UserShowTicketIndex = ({currentUser, outer, history}) => {
  const items = Object.values(currentUser.tickets).map(ticket => (
    <UserShowTicketIndexItem
      key={ticket.id}
      ticket={ticket}
      currentUser={currentUser}
      />
  ));
  return (
    <div>
      <div className="user-show-ticket-index-main">
        <ul>
          {items}
        </ul>
      </div>
    </div>
  );
};

export default withRouter(UserShowTicketIndex);

















// comment
