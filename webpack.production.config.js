const webpack = require('webpack');
const path = require('path');
const node_modules_dir = path.resolve(__dirname, 'node_modules');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    loaders: [{
      test: /\.js[x]?$/,
      exclude: [node_modules_dir],
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react'],
      },
      include: path.join(__dirname, '.'),
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader?modules',
    }, { test: /\.(png|jpg)$/, loader: 'url-loader?limit=40000' }]
  },
}
