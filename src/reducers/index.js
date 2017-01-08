import { combineReducers } from 'redux'
import Immutable from 'Immutable'

export default combineReducers({
  someTh,
})

function someTh(state = defaultState, action) {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return Immutable.fromJS(action.products.map(product => product.id))
    default:
      return state
  }
}
