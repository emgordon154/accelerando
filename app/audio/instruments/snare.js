import {default as Tone} from 'Tone'

import reverb from '../bus/reverb'


export const snareHit = new Tone.MembraneSynth({}).toMaster()


const reverbGain = new Tone.Volume(-24).connect(reverb)
const snareLPF = new Tone.Filter(12000, 'lowpass', -24).toMaster().connect(reverbGain)
const snareHPF = new Tone.Filter(80, 'highpass', -24).connect(snareLPF)
export const snareNoise = new Tone.NoiseSynth({
  envelope: {
    attack: 0.005,
    decay: 0.2
  }
}).connect(snareHPF)
