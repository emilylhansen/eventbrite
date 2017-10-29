import merge from 'lodash/merge';

import {RECEIVE_CATEGORIES} from '../actions/category_actions';


const CategoriesReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CATEGORIES:
    return merge({}, action.categories);
    default:
    return oldState;
  }
};

export default CategoriesReducer;
