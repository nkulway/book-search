import { SET_MODAL_MESSAGE } from '../actionTypes'

const initialState = {
  message: ''
}; 


function modalReducer(state = initialState, action) {
  switch (action.type) {
      case SET_MODAL_MESSAGE: {
        return  Object.assign({}, state, {
          message: action.message
        })
      }
    default:
      return state;
  }
}

export default modalReducer;
