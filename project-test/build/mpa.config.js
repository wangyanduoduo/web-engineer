/*
 * @Author: wy
 * @Date: 2023-12-22 10:11:20
 * @LastEditors: wy
 * @LastEditTime: 2023-12-26 17:10:26
 * @FilePath: /笔记/web-engineer/project-test/build/map.config.js
 * @Description:
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    index: path.resolve(__dirname, '../src/mpa/index.js'),
    login: path.resolve(__dirname, '../src/mpa/login.js'),
  },
  output: {
    filename: 'js/[name]_[hash:8].js',
    path: path.resolve(__dirname, '../dist'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '../dist'),
    },
    compress: true,
    port: 9000,
    hot: true,
    open: true,
  },
  optimization: {
    minimize: true, // 开发环境开启压缩
    minimizer: [
      // 压缩js
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        extractComments: false,
      }),
      // 压缩css
      new CssMinimizerPlugin(),
    ], // 压缩配置

    // 开启代码分割
    splitChunks: {
      chunks: 'all',
      minSize: 30 * 1024, //能够触发压缩的体积
      name: 'common',
      cacheGroups: {
        jquery: {
          name: 'jquery',
          test: /jquery/,
          chunks: 'all',
        },
        lodash: {
          name: 'lodash-es',
          test: /lodash-es/,
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      // 替代原来的file-loader url-loader
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024,
          },
        },
        generator: {
          filename: 'images/[name].[hash:6][ext]',
        },
      },
      {
        test: /\.ejs/,
        loader: 'ejs-loader',
        options: {
          esModule: false,
        },
      },

      {
        test: /\.vue/,
        loader: 'vue-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/public/index.html'),
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      template: path.resolve(__dirname, '../src/public/login.html'),
      chunks: ['login'],
    }),
    // 映射jquery
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../src/img'),
          to: path.resolve(__dirname, '../dist/img'),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:6].css',
      chunkFilename: 'css/[name].[hash:6].css',
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
  ],
};
