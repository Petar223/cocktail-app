const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { type } = require('os');

module.exports = {
  entry: './src/index.js', // Ulazna tačka aplikacije
  output: {
    filename: 'bundle.[contenthash].js', // Ime izlaznog fajla sa hash-om za keširanje
    path: path.resolve(__dirname, 'build'), // Gde se smeštaju izlazni fajlovi
    publicPath: '/', // Javni put za učitavanje fajlova
    clean: true, // Automatsko čišćenje stare build fascikle
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Primeni Babel na .js fajlove
        exclude: /node_modules/, // Izuzmi node_modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/, // CSS loader za rad sa stilovima
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i, // Regex koji hvata sve formate slika
        type: 'asset/resource', // Webpack će tretirati fajlove kao resurse (kopira ih u output folder)
        generator: {
          filename: 'images/[name][hash][ext]', // Ime fajlova u izlaznoj fascikli
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // HTML šablon
      favicon: './public/favicon.ico', // Favicon
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css', // Imena CSS fajlova sa hash-om
    }),
    new CleanWebpackPlugin(), // Plugin za čišćenje build foldera pre novog build-a
    new ESLintPlugin({
      extensions: ['js', 'jsx'], // Lint-ovanje JavaScript i JSX fajlova
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'], // Automatsko prepoznavanje ekstenzija
  },
};
