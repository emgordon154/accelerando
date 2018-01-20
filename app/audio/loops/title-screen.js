import {Tone} from '../'

// notice that we're only importing half of the snare,
// the white noise half,
// for that retro 8-bit 
//   "we don't have a / can't use the wavetable channel
//   and certainly don't have FM synthesis
//   so our drums are just volume-enveloped white noise :/"
// aesthetic

import {bass, kick, snareNoise, pad} from '../instruments'

import {chromaticETScale} from '../tuning'

// I think I'll go with the familiar 12-TET for the title screen,
// and then go nonstandard to induce discomfort only once the game's started. :)
// ooh, and maybe i'll do an odd time signature too! 4/4 here though
const scale = chromaticETScale(1, 12, 2)

const loopLength = '4m'

Tone.Transport.loop = true
Tone.Transport.loopEnd = loopLength

function kickAndSnare(time) {
  const kickFreq = 'C2'; // necessary semicolons ;(
  [time, `${time} + 2n`]
    .forEach(onBeat => kick.triggerAttackRelease(kickFreq, onBeat));
  [`${time} + 4n`, `${time} + 2n + 4n`]
    .forEach(offBeat => snareNoise.triggerAttackRelease('8n', offBeat))
}

const loop = new Tone.Loop(time => {
  [time, `${time} + 1m`, `${time} + 2m`, `${time} + 3m`]
    .forEach(measure => kickAndSnare(measure));

  
}, loopLength)