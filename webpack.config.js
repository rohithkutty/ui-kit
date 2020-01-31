const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const PORT = 9001;
module.exports = {
  mode: "development",
  entry: { main: "./src/index.js" },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".jsx", ".js", ".css"]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        test: /\.(js|jsx)(\?.*)?$/i,
        exclude: /node_modules/
      })
    ],
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: "./src",
    compress: true,
    liveReload: true,
    port: PORT
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "/css/[name].css"
    })
  ]
};
