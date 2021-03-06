//action creator
// import all to delegate later, save space on importing, cleaner
import * as types from "../actionTypes";

export const executeSearch = (author, title) => dispatch => {
  fetch(`http://openlibrary.org/search.json?author=${author}&limit=10`)
    .then((result) => result.json())
    // dispatches object based on weather or not the search was successful
    .then((data) => dispatch(fetchSuccess(true, data.docs)))
    .catch((err) => dispatch(fetchSuccess(false, err.message)));
};


const fetchSuccess = (isSuccess, data) => {
  if (isSuccess) {
  return {
    type: types.EXECUTE_SEARCH,
    searchQueryResults: data
  }
} else {
  return {
    type: types.SET_MODAL_MESSAGE,
    message: data
  }
}
}

export const setModalMessage = message => dispatch => {
  // if youre listening to setModalMessage here is your data
  dispatch({
    type: types.SET_MODAL_MESSAGE,
    message
  })
}