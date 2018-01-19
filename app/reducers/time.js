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