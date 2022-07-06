const path = require('path');
const PugPlugin = require('pug-plugin');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    mode: isProd ? 'production' : 'development',
    devtool: isProd ? 'source-map' : 'inline-source-map',

    resolve: {
      alias: {
        Views: path.join(__dirname, 'src/views/'),
        Images: path.join(__dirname, 'src/images/'),
        Fonts: path.join(__dirname, 'src/fonts/'),
        Styles: path.join(__dirname, 'src/scss/'),
        Scripts: path.join(__dirname, 'src/js/'),
      },
    },

    output: {
      path: path.join(__dirname, 'dist/'),
      publicPath: '/',
      filename: 'assets/js/[name].[contenthash:8].js',
    },

    context: path.resolve(__dirname, 'src'),

    entry: './js/main.js',

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

    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 9000,
      watchFiles: {
        paths: ['src/**/*.*'],
        options: {
          usePolling: true,
        },
      },
    },
  };
};
