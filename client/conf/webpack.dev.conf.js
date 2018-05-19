const webpack = require('webpack');
const conf = require('../../gulp.conf');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      config$: path.resolve(process.cwd(), conf.path.client.src('app.config.js')),
      '@': path.join(process.cwd(), conf.paths.client.src)
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: 'eslint-loader'
      },
      {
        test: /\.(woff2?|eot|ttf|png|gif|jpe?g|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            loaders: {
              sass: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            }
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new webpack.DefinePlugin({
      PATH_SEP: JSON.stringify(path.sep),
      FIXTURE_FILE_SUFFIX: JSON.stringify('.test.js')
    })
  ],
  devtool: 'source-map',
  context: path.join(process.cwd(), conf.paths.client.src),
  output: {
    path: path.join(process.cwd(), conf.paths.client.tmp),
    filename: 'app.js'
  },
  entry: {
    app: [
      'babel-polyfill',
      './app.js'
    ]
  }
};
