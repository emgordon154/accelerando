import {default as Tone} from 'Tone'

import {bass, kick, snareHit, snareNoise} from './instruments'

Tone.Transport.bpm.value = 140

const bassLoop = new Tone.Loop(function(time){
  bass.triggerAttackRelease("C3", "8n", time)
  if (Math.random() > 0.666) bass.triggerAttackRelease("C2", "8n", time + '+8n')
}, "4n")

const drumLoop = new Tone.Loop(time => {
  kick.triggerAttackRelease("C2", "8n")
  snareHit.triggerAttackRelease("G2", "8n", time + '+4n', .5)
  snareNoise.triggerAttackRelease("8n", time, 1) //duration, time, velocity
}, "2n")


bassLoop.start("1m").stop("24m")
drumLoop.start("1m").stop("24m")

Tone.Transport.start();
