'use strict';

const path = require('path')
const { resolve } = require('path')

const phaserModule = path.join(__dirname, '/node_modules/phaser-ce/')
const phaser = path.join(phaserModule, 'build/custom/phaser-split.js')
const pixi = path.join(phaserModule, 'build/custom/pixi.js')
const p2 = path.join(phaserModule, 'build/custom/p2.js')

const ExtractTextPlugin = require('extract-text-webpack-plugin')

const webpack = require('webpack')

const extractSass = new ExtractTextPlugin({
  filename: './public/css/styles.css',
  // disable: process.env.NODE_ENV === 'development'
})

module.exports = {
  entry: './app/main.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  context: __dirname,
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: resolve(__dirname, './app'),
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env', 'stage-2']
        }
      },
      { test: /pixi\.js/, use: ['expose-loader?PIXI'] },
      { test: /phaser-split\.js$/, use: ['expose-loader?Phaser'] },
      { test: /p2\.js/, use: ['expose-loader?p2'] },
      {
        test: /\.s[ac]ss$/,
        include: resolve(__dirname, './app'),
        use: extractSass.extract({
          use: [
            // {
            //   loader: 'style-loader',
            //   options: { sourceMap: true }
            // },
            {
              loader: 'css-loader',
              options: { sourceMap: false }
            },
            {
              loader: 'resolve-url-loader',
              options: { sourceMap: false }
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: false }
            }
          ],
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    extractSass,
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
};
