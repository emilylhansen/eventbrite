import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import EventsErrorsReducer from './events_errors_reducer';
const ErrorsReducer = combineReducers({
  session: SessionErrorsReducer,
  events: EventsErrorsReducer
});

export default ErrorsReducer;
