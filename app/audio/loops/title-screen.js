import Tone from '../'

// notice that we're only importing half of the snare,
// the white noise half,
// for that retro 8-bit 
//   "we don't have a / can't use the wavetable channel
//   and certainly don't have FM synthesis
//   so our drums are just volume-enveloped white noise :/"
// aesthetic

import {bass, kick, snareNoise, pad} from '../instruments'
