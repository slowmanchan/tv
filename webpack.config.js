var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/Components/App.js',
    vendor: ['react', 'react-dom', 'react-router'],
  },
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(
      "vendor",
      "vendor.bundle.js",
      Infinity
    )
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-object-assign']
        }
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-object-assign']
        }
      },
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'eval-source-map'
};
