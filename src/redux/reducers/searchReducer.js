import { EXECUTE_SEARCH } from '../actionTypes'

const initialState = {
  results: []
}; 


function searchReducer(state = initialState, action) {
  switch (action.type) {
    case EXECUTE_SEARCH: {
      return Object.assign({}, state, {
        ...state, 
        results: [...state.results, ...action.searchQueryResults]
      })
      }
    default:
      return state;
  }
}

export default searchReducer;
