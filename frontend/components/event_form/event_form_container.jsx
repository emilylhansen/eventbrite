import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  fetchEvent,
  createEvent,
  updateEvent,
  createEventCategory,
  createEventEventType } from '../../actions/event_actions';
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
    startDate: currentDateTime().currentDate,
    startTime: "19:00:00",
    endDate: currentDateTime().currentTime,
    endTime: "22:00:00"
  };

  let formType = "new";

  let category = Object.values(state.entities.categories)[0].name;

  let eventType = Object.values(state.entities.eventTypes)[0].name;

  let categories = Object.values(state.entities.categories);

  let eventTypes = Object.values(state.entities.eventTypes);

  let errors = Object.values(state.errors.events);

  if (ownProps.match.path === '/events/:eventId/edit'){
    event = state.entities.events[ownProps.match.params.eventId];
    dateTime = {
      startDate: event.start_date_time.split(" ")[0],
      startTime: event.start_date_time.split(" ")[1],
      endDate: event.end_date_time.split(" ")[0],
      endTime: event.end_date_time.split(" ")[1]
    };
    formType = "edit";
    category = event.categories[0];
    eventType = event.eventTypes[0];
  }

  return {event, dateTime, formType, category, eventType, categories, eventTypes, errors};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action = ownProps.match.path === '/events/new' ? createEvent : updateEvent;

  return ({
    fetchCategories: () => dispatch(fetchCategories()),
    fetchEventTypes: () => dispatch(fetchEventTypes()),
    fetchEvent: id => dispatch(fetchEvent(id)),
    action: event => dispatch(action(event)),
    createEventCategory: eventCategory => dispatch(createEventCategory(eventCategory)),
    createEventEventType: eventEventType => dispatch(createEventEventType(eventEventType))
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventForm));
