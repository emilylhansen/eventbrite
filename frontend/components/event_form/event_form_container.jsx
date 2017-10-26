import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchEvent, createEvent, updateEvent } from '../../actions/event_actions';
import EventForm from './event_form';

const mapStateToProps = (state, ownProps) => {
  let event = {
    title: "",
    lat: null,
    lng: null,
    start_date_time: null,
    end_date_time: null,
    image_content_type: "",
    image_file_name: "",
    image_file_size: null,
    image_updated_at: null,
    imageFile: null,
    imageUrl: null,
    description: "",
    price: null,
    num_tickets: null,
    organizer_id: null,
    organizer_description: "",
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
