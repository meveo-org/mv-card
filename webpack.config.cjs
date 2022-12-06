const path = require('path');

module.exports = {
    entry: './demo.js',
    mode: "development",
    resolve: {
      modules: ['node_modules'],
    },
    output: {
      path: path.resolve(__dirname, 'dist/demo'),
      publicPath: '/dist/demo/',
      filename: 'index.js',
    },
    devServer: {
      open: ['/index.html'],
      static: {
        directory: path.join(__dirname, ''),
      },
      compress: true,
      port: 9000,
    }
  };