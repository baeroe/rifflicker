const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common.js');
const TerserPlugin = require('terser-webpack-plugin');

// Plugins
const terserPlugin = new TerserPlugin({
  parallel: true,
  cache: true,
  sourceMap: true,
});

module.exports = merge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: [
      terserPlugin,
    ],
  },
})
