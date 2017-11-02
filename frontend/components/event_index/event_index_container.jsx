import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {fetchEvents,
  createSavedEvent,
  deleteSavedEvent
} from '../../actions/event_actions';
import EventIndex from './event_index.jsx';

const mapStateToProps = state => ({
  events: Object.values(state.entities.events),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchEvents: () => dispatch(fetchEvents()),
  createSavedEvent: savedEvent => dispatch(createSavedEvent(savedEvent)),
  deleteSavedEvent: id => dispatch(deleteSavedEvent(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex);
