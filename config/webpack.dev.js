const path = require('path');
const { merge } = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const common = require('../webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    static: path.resolve(__dirname, '../public'),
    historyApiFallback: true,
    hot: true,
    port: 3000,
    open: true,
  },
  plugins: [new ReactRefreshWebpackPlugin()],
});
