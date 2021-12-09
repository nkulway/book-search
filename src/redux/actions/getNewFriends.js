//action creator 
// import all to delegate later, save space on importing, cleaner
import * as types from '../actionTypes'

const getNewFriends = friends => dispatch => {
  dispatch({
    type: types.GET_NEW_FRIENDS,
    friends
  })
}

export default getNewFriends;