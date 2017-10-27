import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchEvent, createEvent, updateEvent } from '../../actions/event_actions';
import EventForm from './event_form';

const mapStateToProps = (state, ownProps) => {
  let event = {
    title: "",
    location: "",
    start_date_time: "",
    end_date_time: "",
    image_content_type: "",
    image_file_name: "",
    image_file_size: "",
    image_updated_at: "",
    imageFile: "",
    imageUrl: "",
    description: "",
    price: "",
    num_tickets: "",
    organizer_id: state.session.currentUser,
    organizer_name: "",
    organizer_description: ""
  };
  let formType = "new";

  if (ownProps.match.path === '/events/:eventId/edit'){
    event = state.events[ownProps.match.params.eventId];
    formType = "edit";
  }
  return {event, formType};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action = ownProps.match.path === '/events/new' ? createEvent : updateEvent;

  return ({
    fetchEvent: id => dispatch(fetchEvent(id)),
    action: event => dispatch(action(event))
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventForm));
