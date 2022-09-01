const path = require('path');
const PugPlugin = require('pug-plugin');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    mode: isProd ? 'production' : 'development',
    devtool: isProd ? 'source-map' : 'inline-source-map',

    stats: {
      preset: 'minimal',
    },

    entry: {
      index: 'src/views/index.pug',
    },

    output: {
      path: path.join(__dirname, 'dist/'),
      // publicPath: './',
      clean: true,
      filename: 'assets/js/[name].[contenthash:8].js',
    },

    resolve: {
      alias: {
        Views: path.join(__dirname, 'src/views/'),
        Images: path.join(__dirname, 'src/assets/images/'),
        Favicons: path.join(__dirname, 'src/assets/favicons/'),
        Fonts: path.join(__dirname, 'src/assets/fonts/'),
        Styles: path.join(__dirname, 'src/assets/styles/'),
        Scripts: path.join(__dirname, 'src/assets/scripts/'),
        Data: path.join(__dirname, 'src/data/'),
      },
    },

    plugins: [
      new PugPlugin({
        verbose: !isProd,
        pretty: !isProd,
        modules: [
          PugPlugin.extractCss({
            filename: 'assets/css/[name].[contenthash:8].css',
          }),
        ],
      }),
    ],

    module: {
      rules: [
        {
          test: /\.pug$/,
          loader: PugPlugin.loader, // pug-plugin already contain the pug-loader
          options: {
            method: 'render', // fast method to generate static HTML files
          },
        },

        // styles
        {
          test: /\.(css|sass|scss)$/i,
          use: ['css-loader', 'sass-loader'],
        },

        // fonts
        {
          test: /\.(woff2?|ttf|otf|eot|svg)$/i,
          type: 'asset/resource',
          include: /assets\/fonts/,
          generator: {
            filename: 'assets/fonts/[name][ext][query]',
          },
        },

        // images
        {
          test: /\.(png|svg|jpe?g|webp)$/i,
          resourceQuery: { not: [/inline/] }, // ignore images with `?inline` query
          type: 'asset/resource',
          include: /assets\/images/,
          generator: {
            filename: 'assets/img/[name].[hash:8][ext]',
          },
        },

        // inline images: png or svg icons with size < 4 KB
        {
          test: /\.(png|svg)$/i,
          type: 'asset',
          include: /assets\/images/,
          parser: {
            dataUrlCondition: {
              maxSize: 4 * 1024,
            },
          },
        },

        // favicons
        {
          test: /\.(png|svg|ico|xml|webmanifest)$/i,
          type: 'asset/resource',
          include: /assets\/favicons/,
          generator: {
            filename: '[name][ext]',
          },
        },
      ],
    },

    performance: {
      hints: isProd ? 'error' : 'warning',
      maxEntrypointSize: isProd ? 1024000 : 4096000,
      maxAssetSize: isProd ? 1024000 : 4096000,
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
