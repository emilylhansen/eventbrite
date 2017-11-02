import { connect } from 'react-redux';

import {fetchByCategory} from '../../actions/event_actions';
import Homepage from './homepage';

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchByCategory: category => dispatch(fetchByCategory(category))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
