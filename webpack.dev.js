const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          "style-loader", // 4. Inject styles into DOM
          "css-loader", // 3. Turn css into commonjs
          "postcss-loader", // 2. Add vendor prefixes to css
          "sass-loader" // 1. Turn sass into css
        ]
      }
    ]
  }
});
