import React from 'react'
import {connect} from 'react-redux'

import {Transport} from '../audio'
import {changeBPM} from '../reducers'

const play = function() {Transport.start()}
const stop = function() {Transport.stop()}

const mapState = state => {
    Transport.bpm.value = state.time.bpm
    return {
        bpm: state.time.bpm
    }
}

const mapDispatch = dispatch => ({
    handleBpmChange (event) {
        dispatch(changeBPM(event.target.value))
        
    }
})

const TimeControl = props => (
    <div>
        <div>{Transport.position}</div>
        <div>
            BPM
            <input 
                id="bpm"
                type="number"
                min="30"
                max="300"
                onChange={props.handleBpmChange}
                value={props.bpm}
            />
        </div>
        <button onClick={play}>play</button>
        <button onClick={stop}>stop</button>
    </div>
)

export default connect(mapState, mapDispatch)(TimeControl)
