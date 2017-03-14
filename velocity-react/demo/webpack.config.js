var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: './app.js',
  devtool: 'eval',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['react-hot']
      }
    ]
  },
  plugins: [
  ], 
};
