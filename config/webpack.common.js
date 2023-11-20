const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const paths = require('./paths')

module.exports = {
  entry: {
    index: path.resolve(paths.src, 'index.js')
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, '../src', 'index.html'),
      favicon: path.resolve(paths.src, 'favicon.png'),
      filename: 'index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_module/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|jpg|jpeg|svg|webp)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name]-[hash][ext]'
        }
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      }
    ]
  },
  mode: 'production',
  output: {
    path: paths.build,
    filename: '[name].[contenthash].bundle.js',
    publicPath: '/',
    clean: true
  }
}