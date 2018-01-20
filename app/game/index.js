import PIXI from 'expose-loader?PIXI!phaser-ce/build/custom/pixi.js'
import p2 from 'expose-loader?p2!phaser-ce/build/custom/p2.js'
import Phaser from 'expose-loader?Phaser!phaser-ce/build/custom/phaser-split.js'

const game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-game', {preload, create, update})

function preload () {
  // https://opengameart.org/content/space-backdrop
  game.load.image('space', 'assets/spacefield.png')

  // https://opengameart.org/content/space-ships-side-scroller
  // i love this background but it doesn't tile neatly.
  // could easily be fixed with a bit of color manipulation around either horizontal edge.
  game.load.image('spaceship', 'assets/spaceship.png')
}

// Declaring outside create function so that these can be referenced in update function.
// This is the first time I've used var in a whiiiiile!
var title, startText, player, cursors, spacebar, background

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
}

function update () {
  // if (spacebar.isDown) console.log('spacebar is down!')
  if (title && spacebar.isDown) {
    title.kill()
    startText.kill()
    background.autoScroll(-5, 0) // background moves left at 5px/s
  }
  player.body.velocity.x = 200 * (cursors.right.isDown - cursors.left.isDown)
  player.body.velocity.y = 150 * (cursors.down.isDown - cursors.up.isDown) // lmao "up.isDown"
}
