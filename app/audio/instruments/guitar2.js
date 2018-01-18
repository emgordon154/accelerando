import {default as Tone} from 'Tone'

import reverb from '../bus/reverb'

// this is a synthier, less out-of-tune guitar

const wetGain = new Tone.Volume(-30).connect(reverb)
const dryGain = new Tone.Volume(-12).toMaster()

// const distortion = new Tone.Chebyshev({order: 9}).connect(dryGain).connect(wetGain)

const pan = new Tone.Panner(1).connect(dryGain).connect(wetGain)

const distortion = new Tone.Distortion({distortion: .6}).connect(pan)

const guitar2 = new Tone.PolySynth(4, Tone.MonoSynth).connect(distortion)

export default guitar2
