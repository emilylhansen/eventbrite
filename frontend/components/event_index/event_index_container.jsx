import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {fetchEvents,
  createSavedEvent,
  deleteSavedEvent,
  fetchByCategory,
  fetchByEventType
} from '../../actions/event_actions';
import {fetchCategories} from '../../actions/category_actions';
import {fetchEventTypes} from '../../actions/event_type_actions';

import EventIndex from './event_index.jsx';

const mapStateToProps = state => ({
  events: Object.values(state.entities.events),
  currentUser: state.session.currentUser,
  categories: Object.values(state.entities.categories),
  eventTypes: Object.values(state.entities.eventTypes)
});

const mapDispatchToProps = dispatch => ({
  fetchEvents: () => dispatch(fetchEvents()),
  fetchByCategory: category => dispatch(fetchByCategory(category)),
  fetchByEventType: eventType => dispatch(fetchByEventType(eventType)),
  createSavedEvent: savedEvent => dispatch(createSavedEvent(savedEvent)),
  deleteSavedEvent: id => dispatch(deleteSavedEvent(id)),
  fetchCategories: () => dispatch(fetchCategories()),
  fetchEventTypes: () => dispatch(fetchEventTypes())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventIndex));
