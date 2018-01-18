import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'

import {play, stop} from '../audio'

const App = props => (
  <div>
    stackathon
    <button onClick={play}>play</button>
    <button onClick={stop}>stop</button>
  </div>
)

export default App
