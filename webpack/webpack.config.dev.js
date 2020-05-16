const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle3.js",
    publicPath: "/dist/"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        enforce: "pre",
        include: path.resolve(__dirname, "../src"),
        loader: "tslint-loader",
        options: {
          typeCheck: false
        }        
      },
      {
        test: /\.tsx?$/,
        enforce: "pre",        
        include: path.resolve(__dirname, "../src"),
        use: "source-map-loader"
      },
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, "../src"),
        loader: "ts-loader"
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  devtool: "inline-source-map",
  mode: "development"
};
