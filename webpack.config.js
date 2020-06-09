const path = require("path");

module.exports = {
  entry: "./index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, "lib", "cjs"),
    filename: "index.js",
    globalObject: "this",
    libraryTarget: "umd",
  },
  externals: {
    react: "react",
  },
  mode: "production",
};
