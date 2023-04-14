const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const path = require('path');

module.exports = ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    '~': path.resolve(__dirname, '../src'),
  };
  config.plugins = [...config.plugins, new NodePolyfillPlugin({ excludeAliases: ['console'] })];

  return config;
};
