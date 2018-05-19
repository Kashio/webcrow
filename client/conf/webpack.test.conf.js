const conf = require('../../gulp.conf');
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: 'eslint-loader'
      },
      {
        test: /.json$/,
        use: 'json-loader'
      },
      {
        test: /\.(woff2?|eot|ttf|png|gif|jpe?g|svg)$/i,
        use: 'url-loader?limit=8192'
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  devtool: 'inline-source-map',
  context: path.join(process.cwd(), conf.paths.client.src),
  entry: {
    app: [
      'babel-polyfill',
      './app.js'
    ]
  }
};
