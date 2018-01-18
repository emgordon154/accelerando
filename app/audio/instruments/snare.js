import {default as Tone} from 'Tone'

export const snareHit = new Tone.MembraneSynth({}).toMaster()
const snareLPF = new Tone.Filter(12000, 'lowpass', -24).toMaster()
const snareHPF = new Tone.Filter(80, 'highpass', -24).connect(snareLPF)
export const snareNoise = new Tone.NoiseSynth({
  envelope: {
    attack: 0.005,
    decay: 0.2
  }
}).connect(snareHPF)