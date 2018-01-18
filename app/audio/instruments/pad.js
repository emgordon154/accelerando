import {default as Tone} from 'Tone'

const pad = new Tone.PolySynth(6, Tone.AMSynth).toMaster()

export default pad
