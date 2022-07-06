const path = require('path');
const PugPlugin = require('pug-plugin');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    mode: isProd ? 'production' : 'development',
    devtool: isProd ? 'source-map' : 'inline-source-map',

    output: {
      path: path.join(__dirname, 'dist/'),
      publicPath: '/',
      filename: 'assets/js/[name].[contenthash:8].js',
    },

    context: path.resolve(__dirname, 'src'),

    entry: './js/main.js',

    devServer: {
      static: './dist',
      hot: false,
      liveReload: true,
      port: 9000,
    },

    plugins: [],

    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: ['css-loader', 'sass-loader'],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.svg$/i,
          type: 'asset',
          use: 'svgo-loader',
        },
      ],
    },
  };
};
