const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.tsx",
  mode:"development",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
  },
  devServer: {
    static: path.join(__dirname,"build"),
    port: 3000,
  },
  resolve: {
    extensions: [".js", ".ts",".tsx",".jsx"],
  },
  externals: {
    'react': 'React',
    'react-dom/client': 'ReactDOM'
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets:[
                    "@babel/preset-env",
                    "@babel/preset-react",
                    "@babel/preset-typescript",
                ]
            }
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/index.css",
    }),
  ],
};