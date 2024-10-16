const { merge } = require('webpack-merge');
const common = require('../webpack.common');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map', // Omogućava source maps za produkciju
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(), // Minifikacija JavaScript-a
      new CssMinimizerPlugin(), // Minifikacija CSS-a
    ],
  },
});
