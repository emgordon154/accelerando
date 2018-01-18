import React from 'react'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'

import {default as Tone} from 'Tone'

import {TimeControl} from './'

const App = props => (
  <div>
    <h1>stackathon</h1>
    <TimeControl />
  </div>
)

export default App
