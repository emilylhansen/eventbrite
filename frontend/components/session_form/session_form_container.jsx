import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { fetchUsers, fetchUser  } from '../../actions/user_actions';
import SessionForm from './session_form';


const mapStateToProps = (state) => {
  return {
    users: Object.values(state.entities.users),
    errors: state.errors.session
  };
};


const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
