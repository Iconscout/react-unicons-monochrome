const path = require("path");

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.umd.js",
    globalObject: "this",
    libraryTarget: "umd",
  },
  externals: {
    react: "react",
  },
  mode: "production",
};
