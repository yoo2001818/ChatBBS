var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var entries = ['./src/client.js'];
var plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    __CLIENT__: true,
    __SERVER__: false,
    __DEVELOPMENT__: process.env.NODE_ENV !== 'production'
  }),
  new HtmlWebpackPlugin({
    title: 'ChatBBS'
  })
];
if (process.env.NODE_ENV !== 'production') {
  entries.push('webpack-dev-server/client?http://localhost:8080');
  entries.push('webpack/hot/only-dev-server');
  plugins.push(new webpack.HotModuleReplacementPlugin());
} else {
  plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {
  // devtool: 'eval',
  context: __dirname,
  entry: entries,
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/',
    filename: 'bundle.js',
    chunkFilename: '[id].js'
  },
  plugins: plugins,
  module: {
    loaders: [
      {
        test: /\.jsx?$/i,
        exclude: /(node_modules|bower_components)/,
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.json$/i,
        loader: 'json'
      },
      {
        test: /\.html?$/i,
        loader: 'html'
      },
      {
        test: /\.css$/i,
        loader: 'style!css'
      },
      {
        test: /\.s[ca]ss$/i,
        loader: 'style!css!sass'
      },
      {
        test: /\.(png|jpe?g|gif)?$/,
        loader: 'url-loader?limit=1024'
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
        loader: 'url-loader?limit=10240'
      }
    ]
  }
};
