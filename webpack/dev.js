const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');

const base = require('./base.js');

const buildPath = path.resolve(__dirname, '../public');

const dev = webpackMerge(base, {
  entry: {
    app: [
      './src/index.jsx',
    ],
  },

  // Enables source maps that can be accessed in browser dev tools
  devtool: 'inline-source-map',

  devServer: {
    port: 8080,
    host: '0.0.0.0',
    contentBase: buildPath,
    inline: true,
    hot: true,
  },

  plugins: [
    new webpack.DefinePlugin({
      ENV: JSON.stringify('dev'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
});

module.exports = dev;
