var path = require('path');

module.exports = {

  entry: path.resolve(__dirname, 'src') + '/app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist') + '/app',
    filename: 'bundle.js',
    publicPath: '/app/'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        exclude: /node_modules/,
        loader:'url-loader?limit=1024&name=images/[name].[ext]'
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=1024&name=https://fonts.googleapis.com/css?family=Raleway/'
      }
    ]
  }
};
