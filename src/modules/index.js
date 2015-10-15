import { combineReducers } from 'redux';

import youtube from './youtube';

// Define what part of the store the reducer is responsible for.
export default combineReducers({
  youtube,
});
