'use strict';

const { resolve } = require('path')

const ExtractTextPlugin = require('extract-text-webpack-plugin')

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
  devtool: 'source-map',
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
              options: { sourceMap: true }
            },
            {
              loader: 'resolve-url-loader',
              options: { sourceMap: true }
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: true }
            }
          ],
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    extractSass
  ]
};
