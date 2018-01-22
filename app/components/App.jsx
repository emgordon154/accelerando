import React from 'react'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'

// import {default as Tone} from 'Tone'

// import {TimeControl} from './'

const App = props => (
  <div>
    <img src="/img/space.jpg" id="space-img" />
    {/* <h1 id="title">stackathon</h1> */}
    {/* <TimeControl /> */}
    <div id="game-container">
      <div id="phaser-game" />
    </div>
  </div>
)

import game from '../game'

export default App
