import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { login } from '../../actions/session_actions';
import { fetchCategories } from '../../actions/category_actions';
import { fetchEventTypes } from '../../actions/event_type_actions';
import SessionFormLogin from './session_form_login';



const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    email: state.session.email,
    errors: Object.values(state.errors.session)
  };
};


const mapDispatchToProps = (dispatch) => ({
  login: id => dispatch(login(id)),
  fetchCategories: () => dispatch(fetchCategories()),
  fetchEventTypes: () => dispatch(fetchEventTypes())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionFormLogin);
