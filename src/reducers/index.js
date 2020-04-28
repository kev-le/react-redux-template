import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import advice from './advice'

export default (history) => combineReducers({
  router: connectRouter(history),
  advice
})