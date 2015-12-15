import { combineReducers } from 'redux'

import youtube from './youtube'
import settings from './settings'
// Define what part of the store the reducer is responsible for.
export default combineReducers({
  settings,
  youtube,
})
