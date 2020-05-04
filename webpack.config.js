const HtmlWepackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.js', '.jsx']
        },
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: '/.html$/',
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        // loader: 'images/file-loader?name=[name].[ext]' // <-- retain original file name
        loader: 'file-loader',
        options: {
          name: 'assets/images/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new Dotenv({
      path: './.env-cmdrc', // Path to .env file (this is the default)
      systemvars: true
    }),
    new HtmlWepackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin([{ from: './assets', to: 'assets' }])
  ]
};
