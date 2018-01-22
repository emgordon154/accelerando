import PIXI from 'expose-loader?PIXI!phaser-ce/build/custom/pixi.js'
import p2 from 'expose-loader?p2!phaser-ce/build/custom/p2.js'
import Phaser from 'expose-loader?Phaser!phaser-ce/build/custom/phaser-split.js'

import {Tone} from '../audio'

import {playTitleMusic} from '../audio/loops/title-screen'

const game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-game', {preload, create, update})

function preload () {
  // https://opengameart.org/content/space-backdrop
  game.load.image('space', 'assets/spacefield.png')

  // https://opengameart.org/content/space-ships-side-scroller
  // I love this background but it doesn't tile neatly.
  // This could easily be fixed
  // by cutting the image in half down the middle,
  // swapping the two sides so the seam is in the middle,
  // and just using a bit of blur on the seam?
  // That might be obvious, but it would probably be good enough for version 0.1!
  game.load.image('spaceship', 'assets/spaceship.png')
}

// Declaring outside create function so that these can be referenced in update function.
// This is the first time I've used var in a whiiiiile!
var title, startText, player, cursors, spacebar, background
var startVelocity, currentVelocity, maxVelocity, tMax, startTime
var acceleration, secondsElapsed, scoreDisplay, score

function create () {
  game.physics.startSystem(Phaser.Physics.ARCADE)
  background = game.add.tileSprite(0, 0, 800, 600, 'space')
  title = game.add.text(0, 200, 'ACCELERANDO', {
    boundsAlignH: 'center',
    font: '20pt Monaco',
    fill: 'white'
  })
  title.setTextBounds(0, 0, 800, 600)
  startText = game.add.text(0, 400, 'press "space" when ready', {
    boundsAlignH: 'center',
    font: '12pt Monaco',
    fill: 'white'
  })
  startText.setTextBounds(0, 0, 800, 600)

  player = game.add.sprite(32, 300, 'spaceship')
  game.physics.arcade.enable(player)
  player.body.collideWorldBounds = true

  cursors = game.input.keyboard.createCursorKeys()
  spacebar = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR)
  game.input.keyboard.addKeyCapture(Phaser.KeyCode.SPACEBAR)
  // console.log('spacebar:', spacebar)

  startVelocity = -5 // 5 px/s left
  maxVelocity = -1200
  tMax = 120 // 120 seconds to max velocity
  acceleration = (maxVelocity - startVelocity) / tMax

  playTitleMusic()
}

function update () {
  // if (spacebar.isDown) console.log('spacebar is down!')
  if (title.alive && spacebar.isDown) {
    title.kill()
    startText.kill()
    currentVelocity = startVelocity
    background.autoScroll(currentVelocity, 0) // background moves left at 5px/s
    startTime = Date.now()
    secondsElapsed = 0
    score = 0
    scoreDisplay = game.add.text(0, 550, `SCORE: ${score} `, {
      font: '12pt Monaco',
      fill: 'white',
      boundsAlignH: 'right'
    })
    scoreDisplay.setTextBounds(0, 0, 800, 600)
  }
  if (secondsElapsed < tMax && Date.now() - startTime > secondsElapsed * 1000) {
    secondsElapsed++
    currentVelocity += acceleration // sorry about the confusing signs :/
    score -= currentVelocity
    scoreDisplay.setText(`SCORE: ${score|0} `) // round to integer
    console.log(secondsElapsed + ' s,', 'v = ' + -currentVelocity)
    background.autoScroll(currentVelocity, 0)
  }
  player.body.velocity.x = 400 * (cursors.right.isDown - cursors.left.isDown)
  player.body.velocity.y = 300 * (cursors.down.isDown - cursors.up.isDown) // lmao "up.isDown"
}
