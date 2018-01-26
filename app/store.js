// this file is completely unused! no React and no Redux right now.
// this is only here because i was started out using it
// and i might want to reuse this stuff in later projects
// but reorganizing this project can't be a priority for me right now.
// so much schoolwork!

import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import loggingMiddleware from 'redux-logger'
import thunk from 'redux-thunk'

export default createStore(rootReducer, applyMiddleware(thunk, loggingMiddleware))
