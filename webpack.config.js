const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    './src/index.js',
  ],
  output: {
    filename: 'bundle.js',
    publicPath: '/public/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.js[x]?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react'],
      },
      include: path.join(__dirname, '.'),
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader?modules',
    }, { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }],
  },
}
