const path = require('path')
const srcFolder = path.join(__dirname, 'src')

module.exports = {
  context: srcFolder,
  entry: {
    background: './background.js',
    content: './content.js',
    'popup/popup': './popup/popup.js'
  },
  mode: process.env.NODE_ENV || 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: path.join(__dirname, 'node_modules')
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: srcFolder
  },
  resolve: {
    alias: {
      src: srcFolder
    }
  }
}
