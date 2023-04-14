const WebpackBar = require('webpackbar');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

const path = require('path');
const resolve = arg => path.resolve(__dirname, arg);

const configure =
  process.env.NODE_ENV === 'production'
    ? {
        cache: {
          type: 'filesystem',
        },
        optimization: {
          runtimeChunk: 'single',
          emitOnErrors: true,
          splitChunks: {
            chunks: 'all',
            minSize: 20000,
            minRemainingSize: 0,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            enforceSizeThreshold: 50000,
          },
        },
        ignoreWarnings: [/Failed to parse source map/],
      }
    : {
        cache: {
          //Enable Webpack cache:
          type: 'filesystem',
        },
        ignoreWarnings: [/Failed to parse source map/],
      };

module.exports = {
  webpack: {
    alias: {
      '~': resolve('src'),
    },
    node: {
      global: true,
    },
    plugins: [
      new NodePolyfillPlugin({ excludeAliases: ['console'] }),
      new WebpackBar({
        reporters:
          process.env.NODE_ENV === 'development'
            ? [
                //Enable default progress bar:
                'fancy',
                //Display time for compile steps after compilation:
                'profile',
                //(Optional) Display launch time and chunck size:
                'stats',
              ]
            : [
                //Hide fancy progress bar and profiling for production build:
                'basic',
              ],
      }),
    ],
    configure,
  },
  babel: {
    plugins: ['@emotion'],
    loaderOptions: {
      //Enable babel-loader cache:
      cacheDirectory: true, //This is the correct location for cacheDirectory (it was wrong in the question)
      //Compress cache which improves launch speed at the expense of disk space:
      cacheCompression: false,
    },
  },
  style: {
    postcssOptions: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
  typescript: {
    // Visual Studio Code does type checking, so CRA doesn't need to:
    enableTypeChecking: false,
  },
};
