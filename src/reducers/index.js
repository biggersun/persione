import { combineReducers } from 'redux'
import Immutable from 'Immutable'
import { 
  RECEIVE_AIRCLE,
  RECEIVE_SELECT,
  SHOW_PROGRESS,
  HIDE_PROGRESS
 } from '../constants/ActionTypes'

export default combineReducers({
  tabList,
  aircles,
  progress
})

function tabList(state = [], action){
  switch (action.type) {
    case RECEIVE_SELECT:
      return Array.from(new Set(action.tabList.map(aircle => aircle.year)))
    default:
      return state
  }
}

function aircles(state = [], action) {
  switch (action.type) {
    case RECEIVE_AIRCLE:
      return action.aircles
    default:
      return state
  }
}

function progress(state = {}, action) {
  switch (action.type){
    case SHOW_PROGRESS:
      return Object.assign({}, state, {
        progressCtrl : action.progressCtrl
      });
    case HIDE_PROGRESS:
      return Object.assign({}, state, {
        progressCtrl : action.progressCtrl
      });
    default:
      return state
  }
}