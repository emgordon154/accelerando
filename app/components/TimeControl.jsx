import React from 'react'

import {Transport} from '../audio'

const play = function() {Transport.start()}
const stop = function() {Transport.stop()}


const TimeControl = props => (
    <div>
        <div>{Transport.position}</div>
        <button onClick={play}>play</button>
        <button onClick={stop}>stop</button>
    </div>
)

export default TimeControl
