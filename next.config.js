const path = require('path');

module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }
    config.resolve.modules =  [path.resolve(__dirname, './'), 'node_modules']

    return config
  }
};
