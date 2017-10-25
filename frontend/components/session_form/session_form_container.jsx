import { connect } from 'react-redux';
import { login, receiveEmail } from '../../actions/session_actions';
import { fetchUsers, fetchUser } from '../../actions/user_actions';
import SessionForm from './session_form';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state) => {
  return {
    users: Object.values(state.entities.users),
    errors: Object.values(state.errors.session)
  };
};


const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUser: id => dispatch(fetchUser(id)),
  receiveEmail: email => dispatch(receiveEmail(email)),
  emailExists: email => dispatch(emailExists(email))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
