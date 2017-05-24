const path = require('path')

module.exports = {
  context: __dirname,
  entry: './src/app.jsx',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '/static'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
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
  }
}
