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
const root = 440
const scale = chromaticETScale(root, 12, 2)

