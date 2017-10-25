import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
// import { fetchUser  } from '../../actions/user_actions';
import SessionFormLogin from './session_form_login';
import { withRouter } from 'react-router-dom';



const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    email: state.session.email,
    errors: Object.values(state.errors.session)
  };
};


const mapDispatchToProps = (dispatch) => ({
  login: id => dispatch(login(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionFormLogin);
