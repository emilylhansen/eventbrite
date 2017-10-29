import { combineReducers } from 'redux';

import UsersReducer from './users_reducer';
import EventsReducer from './events_reducer';
import CategoriesReducer from './categories_reducer';
import EventTypesReducer from './event_types_reducer';

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  events: EventsReducer,
  categories: CategoriesReducer,
  eventTypes: EventTypesReducer
});

export default EntitiesReducer;
