import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import UserShowIndexItem from './user_show_index_item';

const UserShowIndex= ({ createSavedEvent, deleteSavedEvent, currentUser, outer, history}) => {
  const items = Object.values(currentUser.saved_events).map(e => (
    <UserShowIndexItem
      key={e.event_id}
      event={e}
      createSavedEvent={createSavedEvent}
      deleteSavedEvent={deleteSavedEvent}
      currentUser={currentUser}
      />
  ));
  return (
    <div>
      <div className="user-show-index-main">
        <ul>
          {items}
        </ul>
      </div>
    </div>
  );
};

export default withRouter(UserShowIndex);

















// comment
