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
  fetch(`http://openlibrary.org/search.json?author=${author}&limit=10`)
    .then((result) => result.json())
    .then((data) => dispatch(fetchSuccess(true, data.docs)));
};


const fetchSuccess = (isSuccess, data) => {
  return {
    type: types.EXECUTE_SEARCH,
    searchQueryResults: data
  }
}