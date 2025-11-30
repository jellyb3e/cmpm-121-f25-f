const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'development',
  stats: 'errors-warnings',
  entry: './scripts/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: __dirname,
    publicPath: ""
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false
      })
    ]
  }
}
