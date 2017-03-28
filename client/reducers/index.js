import { combineReducers } from 'redux'

import words from './words'
import winners from './winners'


export default combineReducers({
  words,
  winners
})
