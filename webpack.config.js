const path = require('path')

module.exports = {
  context: __dirname,
  entry: './src/app.jsx',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '/static'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        enforce: 'pre',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  }
}
