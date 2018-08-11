import { combineReducers } from 'redux'
import technologyReducer from './technologyReducer'
import packageReducer from './packageReducer'

export default combineReducers({
  technology: technologyReducer,
  package: packageReducer
})
