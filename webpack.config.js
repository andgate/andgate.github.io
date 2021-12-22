const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'index.js',
    publicPath: './',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: {
      publicPath: './'
    },
    port: 9000,
    hot: false,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.(js)x?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          babelrc: true,
        },
      },
      {
        test: /\.(ts)x?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          babelrc: true,
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(txt)$/i,
        type: 'asset/source'
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  optimization: {
    minimizer: [new TerserPlugin({
      extractComments: false,
    })],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: path.resolve(__dirname, 'docs', 'index.html'),
      favicon: path.resolve(__dirname, 'favicons', 'favicon32.png'),
      inject: 'body',
      publicPath: './'
    })
  ]
}
