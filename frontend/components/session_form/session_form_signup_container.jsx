import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionFormSignup from './session_form_signup';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    email: state.session.email,
    errors: Object.values(state.errors.session)
  };
};


const mapDispatchToProps = (dispatch) => ({
  signup: id => dispatch(signup(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionFormSignup);
