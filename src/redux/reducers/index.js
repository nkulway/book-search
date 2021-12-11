import { 
  ADD_NEW_FRIENDS, 
  EXECUTE_SEARCH, 
  EXECUTE_SEARCH_FAIL 
} from '../actionTypes'


const initialState = {
friends: ['anna', 'billy', 'carlos'],
searchResults: [],
searchResultsFailMessage: null
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
      case EXECUTE_SEARCH_FAIL: {
        return  Object.assign({}, state, {
          ...state,
          searchResultsFailMessage: action.errorMessage
        })
      }
    default:
      return state;
  }
}

export default appReducer
