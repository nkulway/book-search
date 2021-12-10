import { ADD_NEW_FRIENDS, EXECUTE_SEARCH } from '../actionTypes'


const initialState = {
friends: ['anna', 'billy', 'carlos'],
searchResults: []
}
function appReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_FRIENDS: {
      return {
        friends: [...state.friends, action.friend]
      }
    }
    case EXECUTE_SEARCH: {
      return Object.assign({}, state, {
        ...state, 

        searchResults: [...state.searchResults, ...action.searchQueryResults]
      })
      }
    default:
      return state;
  }
}

export default appReducer
