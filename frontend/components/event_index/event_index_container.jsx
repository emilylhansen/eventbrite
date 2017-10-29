import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {fetchEvents} from '../../actions/event_actions';
import EventIndex from './event_index.jsx';

const mapStateToProps = state => ({
  events: Object.values(state.entities.events)
});

const mapDispatchToProps = dispatch => ({
  fetchEvents: () => dispatch(fetchEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex);
