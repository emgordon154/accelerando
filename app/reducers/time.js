// action types

const CHANGE_BPM = 'CHANGE_BPM'

// action creators

const changeBPM = bpm => ({
  type: CHANGE_BPM,
  bpm
})

const defaultBPM = 120

export default function(action, bpm=defaultBPM) {
  switch (action.type) {
    case CHANGE_BPM:
      return action.bpm

    default: 
      return bpm
  }
}