// this entire folder is completely unused! no React and no Redux right now.
// this is only here because i was started out using it
// and i might want to reuse this stuff in later projects
// but reorganizing this project can't be a priority for me right now.
// so much schoolwork!

import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import loggingMiddleware from 'redux-logger'
import thunk from 'redux-thunk'

export default createStore(rootReducer, applyMiddleware(thunk, loggingMiddleware))


// action types

const CHANGE_BPM = 'CHANGE_BPM'

// action creators

export const changeBPM = bpm => ({
  type: CHANGE_BPM,
  bpm
})

const defaultTimeState = { // believe me, i'd rather have it just be a number than an object, but redux demands objects
  bpm: 140
}

export default function(state=defaultTimeState, action) {
  switch (action.type) {
    case CHANGE_BPM:
      return {
        ...state,
        bpm: action.bpm
      }

    default: 
      return state
  }
}