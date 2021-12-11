//action creator
// import all to delegate later, save space on importing, cleaner
import * as types from "../actionTypes";

export const addNewFriend = friend => (dispatch) => {
  dispatch({
    type: types.ADD_NEW_FRIENDS,
    friend
  });
};

export const executeSearch = (author, title) => dispatch => {
  fetch(`http://openlibrary.org/searchx.json?author=${author}&limit=10`)
    .then((result) => result.json())
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
    type: types.EXECUTE_SEARCH_FAIL,
    errorMessage: data
  }
}
}