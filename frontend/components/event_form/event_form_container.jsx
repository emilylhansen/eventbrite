import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  fetchEvent,
  fetchEvents,
  createEvent,
  updateEvent,
  createEventCategory,
  updateEventCategory,
  createEventEventType,
  updateEventEventType
 } from '../../actions/event_actions';
import { fetchCategories} from '../../actions/category_actions';
import { fetchEventTypes} from '../../actions/event_type_actions';

import EventForm from './event_form';

const currentDateTime = () => {
  let newDate = new Date();
  let month = newDate.getMonth()+1 < 10 ? "0" + newDate.getMonth()+1 : newDate.getMonth()+1;
  let day = newDate.getDate() < 10 ? "0" + newDate.getDate() : newDate.getDate();
  let currentDate = newDate.getFullYear() + "-"
                  + month + "-"
                  + day;
  let currentTime = newDate.getHours() + ":"
                  + newDate.getMinutes() + ":"
                  + newDate.getSeconds();

  return {currentDate, currentTime};
};

const mapStateToProps = (state, ownProps) => {
  let event = {
    title: "",
    location: "",
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
    startDate: currentDateTime().currentDate,
    startTime: "19:00:00",
    endDate: currentDateTime().currentTime,
    endTime: "22:00:00"
  };

  let formType = "new";

  let categories = Object.values(state.entities.categories);

  let eventTypes = Object.values(state.entities.eventTypes);

  let category = categories[0];

  let eventType = eventTypes[0];

  let currentDate = currentDateTime().currentDate;

  let errors = Object.values(state.errors.events);

  if (ownProps.match.path === '/events/:eventId/edit'){
    const potentialEvent = state.entities.events[ownProps.match.params.eventId];
    if (potentialEvent) {
      event = potentialEvent;
      dateTime = {
        startDate: event.start_date_time,
        startTime: event.start_date_time,
        endDate: event.end_date_time,
        endTime: event.end_date_time
      };
      category = Object.values(event.category)[0].name;
      eventType = Object.values(event.eventType)[0].name;
    }
    formType = "edit";
  }

  return {event, dateTime, formType, category, eventType, categories,
    eventTypes, currentDate, errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action = ownProps.match.path === '/events/new' ? createEvent : updateEvent;

  return ({
    fetchCategories: () => dispatch(fetchCategories()),
    fetchEventTypes: () => dispatch(fetchEventTypes()),
    fetchEvent: id => dispatch(fetchEvent(id)),
    fetchEvents: () => dispatch(fetchEvents()),
    action: event => dispatch(action(event)),
    createEventCategory: eventCategory => dispatch(createEventCategory(eventCategory)),
    createEventEventType: eventEventType => dispatch(createEventEventType(eventEventType)),
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventForm));























// comment
