const path = require('path')
// const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: "editor.js"
  },
  resolve: {
    extensions: [".vue", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"]
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"]
      },
      {
        test: /\.s?css/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(jpe?g|png|gif|(woff(2)?|ttf|eot|svg))$/,
        use: ["file-loader"]
      }
    ]
  },
  devServer: {
    open: true,
    hot: true
  },
  devtool: "inline-source-map",
  // plugins: [new HtmlWebpackPlugin()],
  optimization: {
    minimize: false
  }
};