const webpack = require('webpack');
const conf = require('../../gulp.conf');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader', 'postcss-loader']
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            postcss: [
              autoprefixer({
                browsers: ['last 2 versions']
              })
            ],
            loaders: {
              sass: ExtractTextPlugin.extract({
                use: ['css-loader', 'sass-loader']
              })
            }
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: true,
      options: {
        postcss: [autoprefixer]
      }
    }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new ExtractTextPlugin('style.css')
  ],
  devtool: 'source-map',
  context: path.join(process.cwd(), conf.paths.client.src),
  output: {
    path: path.join(process.cwd(), conf.paths.client.tmp),
    filename: 'app.js'
  },
  entry: './app.js'
};