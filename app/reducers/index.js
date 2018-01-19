import {combineReducers} from 'redux'

import time from './time'

const rootReducer = combineReducers({time})

// const rootReducer = combineReducers({time}) //

export default rootReducer

export * from './time'
