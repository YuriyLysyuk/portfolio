const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',

  context: path.resolve(__dirname, 'src'),

  entry: './js/main.js',

  devServer: {
    static: './dist',
    hot: false,
    liveReload: true,
    port: 9000,
  },

  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[hash].bundle.js',
    clean: true,
    assetModuleFilename: 'assets/[contenthash][ext][query]',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].bundle.css',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
