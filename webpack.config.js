const { resolve } = require('path')
const webpack = require('webpack')

function buildConfig(env) {
  return require('./env/' + env + '.js')(env)
}

module.exports = buildConfig;
