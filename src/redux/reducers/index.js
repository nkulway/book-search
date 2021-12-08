import { GET_NEW_FRIENDS } from '../actionTypes'


const initialState = {
friends: ['anna', 'billy', 'carlos']
}
function appReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NEW_FRIENDS: {
      return {
        friends: action.friends
      }
    }
    default:
      return state;
  }
}

export default appReducer
