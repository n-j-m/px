'use strict';

require('dotenv').load();

const webpack = require('webpack');
const merge = require('webpack-merge');
const proxy = require('./proxy')

const mergeCommon = merge.bind(null, require('./webpack.common'));

proxy.listen(process.env.PROXY_PORT, () => console.log('dev proxy listening'))

module.exports = mergeCommon({
  devtool: 'source-map',

  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,

    host: process.env.HOST,
    port: process.env.PORT,

    proxy: {
      '/api*': `http://${process.env.HOST}:${process.env.PROXY_PORT}`
    }
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});