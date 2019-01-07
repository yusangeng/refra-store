
var path = require('path')
// var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

var config = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    library: 'Manifoldx',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, '../.package'),
    filename: 'manifoldx.js',
    umdNamedDefine: true
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'static',
    //   reportFilename: 'BundleReport.html',
    //   logLevel: 'info'
    // })
  ]
}

module.exports = config
