import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {fetchEvent,
  createSavedEvent,
  deleteSavedEvent} from '../../actions/event_actions';
import {fetchUsers} from '../../actions/user_actions';

import UserEvents from './user_events';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserEvents));
