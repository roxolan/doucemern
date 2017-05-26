const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: __dirname,
  entry: {
    app: './src/App.jsx',
    vendor: ['react', 'react-dom', 'babel-polyfill']
  },
  output: {
    path: path.join(__dirname, '/static'),
    filename: 'app.bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle.js'})
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015']
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
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  }
}
