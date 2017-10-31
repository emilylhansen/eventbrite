import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { openModal } from '../../actions/modal_actions';
import {fetchEvent,
  createSavedEvent,
  deleteSavedEvent} from '../../actions/event_actions';
import {fetchUsers} from '../../actions/user_actions';

import EventShow from './event_show';

const mapStateToProps = (state, ownProps) => {
  const eventId = parseInt(ownProps.match.params.eventId);

  let event = state.entities.events[eventId];

  let users = state.entities.users;


  return {
    eventId,
    event,
    users,
    current_user: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  fetchEvent: id => dispatch(fetchEvent(id)),
  fetchUsers: () => dispatch(fetchUsers()),
  createSavedEvent: savedEvent => dispatch(createSavedEvent(savedEvent)),
  deleteSavedEvent: id => dispatch(deleteSavedEvent(id)),
  openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventShow));
