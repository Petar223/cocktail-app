const path = require('path');
const { merge } = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const common = require('../webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map', // Omogućava source maps za debugging
  devServer: {
    static: path.resolve(__dirname, '../public'), // Gde se nalaze statički fajlovi
    historyApiFallback: true, // Za podršku za React Router
    hot: true, // Hot module replacement za brže osvežavanje koda
    port: 3000, // Port na kojem će dev server raditi
    open: true, // Automatsko otvaranje preglednika
  },
  plugins: [
    new ReactRefreshWebpackPlugin(), // Plugin za brže osvežavanje React komponenti
  ],
});
