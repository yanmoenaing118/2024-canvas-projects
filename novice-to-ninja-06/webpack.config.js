const path = require("path");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./js/main.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, ""),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],

  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, ""),
    },
    compress: true,
    port: 9000,
  },
};
