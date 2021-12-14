import { combineReducers } from 'redux'
import modal from './modalReducer'
import search from './searchReducer'

export default combineReducers({ modal, search })