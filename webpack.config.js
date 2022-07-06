const path = require('path');
const PugPlugin = require('pug-plugin');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    mode: isProd ? 'production' : 'development',

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
      filename: '[contenthash].bundle.js',
      clean: true,
      assetModuleFilename: 'assets/[contenthash][ext][query]',
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
