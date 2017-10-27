const { resolve } = require('path')
const webpack = require('webpack')

module.exports = function (env) {
  return {

    context: resolve(__dirname, '../app'),

    entry: [
      'react-hot-loader/patch',
      // Bundle code and start server
      'webpack-dev-server/client?http://localhost:3000',
      // bundle the client for hot reloading
      'webpack/hot/only-dev-server',
      // Entry Point
      './index.jsx'
    ],

    output: {
      path: resolve(__dirname, '../dist/local'),
      filename: 'bundle.js',
      publicPath: '/',
      sourceMapFilename: '[name].map'
    },

    devtool: 'inline-source-map',

    devServer: {
      contentBase: resolve(__dirname, '../dist/local'),
      compress: true,
      historyApiFallback: true,
      hot: true,
      host: 'localhost',
      port: 3000,
      publicPath: '/',
      quiet: false
    },

    stats: {
      colors: true,
      reasons: true,
      chunks: false
    },

    module: {
      rules: [
        // {
        //   enforce: 'pre',
        //   test: /\.jsx?$/,
        //   loader: 'eslint-loader',
        //   exclude: /node_modules/
        // },
        {
          test: /\.jsx$/,
          use: [
            'babel-loader'
          ],
          exclude: resolve(__dirname, "node_modules")
        },
        {
          test: /\.(jpg|png|svg)$/,
          loader: 'url-loader',
          options: {
            limit: 25000,
          },
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        }
      ]
    },
    resolve: {
      alias: {
        App: resolve(__dirname, '../app'),
        Components: resolve(__dirname, '../app/components'),
        Containers: resolve(__dirname, '../app/containers'),
        Public: resolve(__dirname, '../public'),
        CSS: resolve(__dirname, '../public/css'),
        Images: resolve(__dirname, '../public/images')
      },
      extensions: ['.js', '.jsx', '.json', '.scss', '.png', '.jpg', '.jpeg', '.svg', 'gif']
    },
    externals: {
      'Config': JSON.stringify({
        env: 'local',
        api: 'gu0rkom2gb.execute-api.us-west-2.amazonaws.com/api/configs'
      })
    },
    plugins: [
      // enable HMR and echo module names in console on update
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin()
    ]
  }
}