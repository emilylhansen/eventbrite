import * as EventApiUtil from '../util/event_api_util';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories
});

export const fetchCategories = () => dispatch => (
  EventApiUtil.fetchCategories().then(
    categories => dispatch(receiveCategories(categories))
  )
);
