import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import UserShowTicketIndex from './user_show';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserShowTicketIndex);
