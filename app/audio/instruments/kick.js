import {default as Tone} from 'Tone'

import basskickComp from '../bus/basskick-comp'

const kick = new Tone.MembraneSynth({}).connect(basskickComp)

export default kick
