import {default as Tone} from 'Tone'

import {bass, kick, snareHit, snareNoise, hihat} from './instruments'

Tone.Transport.bpm.value = 140

const bassLoop = new Tone.Loop(function(time){
  const root = "C3"

  let notes = [].concat(
    Array(20).fill(root),
    Array(4).fill(root + '* 4/3'), // up to IV
    Array(4).fill(root + '* 2/3'), // down to IV
    // 1.05946309436 is 2**(1/12)
    [root + '* 1.05946309436', root + '* 1.05946309436 / 2', root + '* 1.189207115'] // off notes
  )
  let note = notes[Math.random()*notes.length|0]
  bass.triggerAttackRelease(note, "8n", time)
  if (Math.random() > 0.666) bass.triggerAttackRelease("C2", "8n", time + '+16n')
}, "8n")

const drumLoop = new Tone.Loop(time => {
  kick.triggerAttackRelease("C2", "8n")
  snareHit.triggerAttackRelease("G2", "8n", time + '+4n', .5)
  snareNoise.triggerAttackRelease("8n", time, 1) //duration, time, velocity
}, "2n")

const hatLoop = new Tone.Loop(time => {
  hihat.triggerAttackRelease('16n', time)
  hihat.triggerAttackRelease('16n', time + '+16n', .2)
  hihat.triggerAttackRelease('4n', time + '+8n', .5)
  hihat.triggerAttackRelease('16n', time + '+8n+16n', .2)
}, "4n")


bassLoop.start("1m").stop("24m")
drumLoop.start("1m").stop("24m")
hatLoop.start("1m").stop("24m")

Tone.Transport.start();
