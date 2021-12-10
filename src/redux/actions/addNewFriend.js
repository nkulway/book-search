//action creator 
// import all to delegate later, save space on importing, cleaner
import * as types from '../actionTypes'

const addNewFriend = friend => dispatch => {
    dispatch({
    type: types.ADD_NEW_FRIENDS,
    friend
  })
}

export default addNewFriend;