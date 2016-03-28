'use strict';

const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const BuildConstants = require('./constants');

const config = {
  entry: [ BuildConstants.ENTRY ],
  output: {
    path: BuildConstants.BUILD_PATH,
    filename: 'bundle.js'
  },

  resolve: {
    alias: {
      'api': path.resolve('./client/api')
    }
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', include: [BuildConstants.CLIENT_PATH] },
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader'), include: [
        BuildConstants.CLIENT_PATH,
        path.resolve('./node_modules', 'bootstrap')
      ] },
      { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: require('../package.json').name,
      template: path.resolve(__dirname, 'index-template.html'),
      appMountId: 'root'
    }),
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new webpack.DefinePlugin({
      CLIENT_ID: JSON.stringify(process.env.CLIENT_ID),
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new ExtractTextPlugin('/bundle.css')
  ]
};

module.exports = config;