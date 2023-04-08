const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

// Plugins
const htmlPlugin = new HtmlWebPackPlugin({
  favicon: "./src/assets/favicon.png",
  template: path.resolve(__dirname, "src", "index.html"),
  inject: true,
  filename: "./index.html",
});
const cleanWebpackPlugin = new CleanWebpackPlugin();

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [htmlPlugin, cleanWebpackPlugin],
  resolve: {
    alias: {
      Components: path.resolve(__dirname, "src/components"),
      Assets: path.resolve(__dirname, "src/assets"),
    },
  },
};
