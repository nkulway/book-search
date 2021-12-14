import { EXECUTE_SEARCH_FAIL } from '../actionTypes'

const initialState = {
  message: ''
}; 


function modalReducer(state = initialState, action) {
  switch (action.type) {
      case EXECUTE_SEARCH_FAIL: {
        return  Object.assign({}, state, {
          message: action.errorMessage
        })
      }
    default:
      return state;
  }
}

export default modalReducer;
