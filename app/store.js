import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import loggingMiddleware from 'redux-logger'
import thunk from 'redux-thunk'

export default createStore(rootReducer, applyMiddleware(thunk, loggingMiddleware))
