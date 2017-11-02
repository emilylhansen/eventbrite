import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  createSavedEvent,
  deleteSavedEvent
} from '../../actions/event_actions';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createSavedEvent: savedEvent => dispatch(createSavedEvent(savedEvent)),
    deleteSavedEvent: id => dispatch(deleteSavedEvent(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
