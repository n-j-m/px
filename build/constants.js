'use strict';

const path = require('path');

module.exports = {
  CLIENT_PATH: path.resolve(process.cwd(), 'client'),
  ENTRY: path.resolve(process.cwd(), 'client', 'main.js'),
  BUILD_PATH: path.resolve(process.cwd(), 'server', 'public')
};