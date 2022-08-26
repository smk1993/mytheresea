const webpack = require("webpack");
const paths = require("./config/paths");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { merge } = require("webpack-merge");
const loadPreset = require("./config/presets/loadPreset");
const loadConfig = (mode) => require(`./config/webpack.${mode}.js`)(mode);

module.exports = function (env) {
  const { mode = "production" } = env || {};
  return merge(
    {
      mode,
      entry: `${paths.srcPath}/index.js`,
      output: {
        path: paths.distPath,
        filename: "[name].bundle.js",
        publicPath: "/",
      },
      devtool: 'eval-source-map',
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            use: ["babel-loader"],
            exclude: path.resolve(__dirname, "node_modules"),
          },
          {
            test: /\.scss$/i,
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
              {
                loader: "postcss-loader",
                options: {
                  postcssOptions: {
                    plugins: {autoprefixer: {}}
                  }
                }
              },
              "sass-loader"
            ]
          },
          {
            test: /\.(css| scss)$/,
            use: ['style-loader','css-loader']
        },
          // Images: Copy image files to build folder
          { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: "asset/resource" },

          // Fonts and SVGs: Inline files
          { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: "asset/inline" },
        ],
      },
      resolve: {
        modules: [paths.srcPath, "node_modules"],
        extensions: [".js", ".jsx", ".json", ".scss"],
      },
      devServer: {
        historyApiFallback: true,
      },
      plugins: [
        new CleanWebpackPlugin(),
        // Copies files from target to destination folder
        new CopyWebpackPlugin({
          patterns: [
            {
              from: paths.publicPath,
              to: "assets",
              globOptions: {
                ignore: ["*.DS_Store"],
              },
              noErrorOnMissing: true,
            },
          ],
        }),
        new HTMLWebpackPlugin({
          template: `${paths.publicPath}/index.html`,
        }),
        new MiniCssExtractPlugin({
          filename: "index.css"
        }),
        new webpack.ProgressPlugin(),
      ],
    },
    loadConfig(mode),
    loadPreset(env)
  );
};
