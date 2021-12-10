import { ADD_NEW_FRIENDS } from '../actionTypes'


const initialState = {
friends: ['anna', 'billy', 'carlos']
}
function appReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_FRIENDS: {
      return {
        friends: [...state.friends, action.friend]
      }
    }
    default:
      return state;
  }
}

export default appReducer
