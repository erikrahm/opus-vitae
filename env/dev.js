const { resolve } = require('path')
const webpack = require('webpack')

module.exports = function (env) {
  return {

    context: resolve(__dirname, '../app'),

    entry: [
      './index.jsx'
    ],

    output: {
        path: resolve(__dirname, '../dist/dev'),
        filename: '[name].bundle.js',
        publicPath: '/',
        sourceMapFilename: '[name].map'
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
        // {
        //   test: /\.json$/,
        //   loader: 'json-loader'
        // },
        {
          test: /\.scss$/,
          use: [{
              loader: 'style-loader' // creates style nodes from JS strings
          }, {
              loader: 'css-loader' // translates CSS into CommonJS
          }, {
              loader: 'sass-loader' // compiles SCSS to CSS
          }]
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
        env: 'local'
      })
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
          minimize: true,
          debug: false
      }),
      new webpack.optimize.UglifyJsPlugin({
          beautify: false,
          mangle: {
              screw_ie8: true,
              keep_fnames: true
          },
          compress: {
              screw_ie8: true
          },
          comments: false
      })
    ]
  }
}