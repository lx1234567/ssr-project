const path = require('path')
const nodeExternals = require('webpack-node-externals')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
  entry: {
    index: path.resolve(__dirname, '../src/server.js')
  },
  mode: 'development',
  target: 'node',
  devtool: 'eval-cheap-module-source-map',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist/server')
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [{
      test: /\.js/,
      use: 'babel-loader'
    }]
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../public'),
          to: path.resolve(__dirname, '../dist')
    }])
  ]
}