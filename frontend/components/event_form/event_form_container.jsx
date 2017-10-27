import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchEvent, createEvent, updateEvent } from '../../actions/event_actions';
import EventForm from './event_form';

const mapStateToProps = (state, ownProps) => {
  let newDate = new Date();
  let month = newDate.getMonth()+1 < 10 ? "0" + newDate.getMonth()+1 : newDate.getMonth()+1;
  let day = newDate.getDate() < 10 ? "0" + newDate.getDate() : newDate.getDate();
  let currentDate = newDate.getFullYear() + "-"
                  + month + "-"
                  + day;
  let currentTime = newDate.getHours() + ":"
                  + newDate.getMinutes() + ":"
                  + newDate.getSeconds();

  let event = {
    title: "",
    lat: "",
    lng: "",
    start_date_time: "",
    end_date_time: "",
    avatarFile: null,
    avatarUrl: null,
    description: "",
    price: "",
    num_tickets: "",
    organizer_id: state.session.currentUser.id,
    organizer_name: "",
    organizer_description: ""
  };
  let dateTime = {
    startDate: currentDate,
    startTime: "19:00:00",
    endDate: currentDate,
    endTime: "22:00:00"
  };

  let formType = "new";

  if (ownProps.match.path === '/events/:eventId/edit'){
    event = state.events[ownProps.match.params.eventId];
    dateTime = {
      startDate: event.start_date_time.split(" ")[0],
      startTime: event.start_date_time.split(" ")[1],
      endDate: event.end_date_time.split(" ")[0],
      endTime: event.end_date_time.split(" ")[1]
    };
    formType = "edit";
  }

  return {event, dateTime, formType, errors: Object.values(state.errors.events)};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action = ownProps.match.path === '/events/new' ? createEvent : updateEvent;

  return ({
    fetchEvent: id => dispatch(fetchEvent(id)),
    action: event => dispatch(action(event))
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventForm));
