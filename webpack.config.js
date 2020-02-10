const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "public"), //Ruta principal de codigo.
    filename: "bundle.js"
  },
  devServer: {
    port: 4000
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, //test all js or jsx files
        use: ["babel-loader"], //use babel-loader to translate the js or jsx files
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
