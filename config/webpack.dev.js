const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');

/** @type {import('webpack').Configuration} */
const devConfig = {
    mode: "development",
    devServer: {
      port: 3000,
      static: "../dist",
      open: true,
      hot: true,
    },
    target: "web",
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin()
    ]
    
  };

module.exports = merge(common, devConfig )