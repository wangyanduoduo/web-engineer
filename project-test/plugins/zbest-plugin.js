/*
 * @Author: wy
 * @Date: 2024-01-12 14:30:54
 * @LastEditors: wy
 * @LastEditTime: 2024-01-12 16:18:49
 * @FilePath: /笔记/web-engineer/project-test/plugins/zbest-plugin.js
 * @Description:
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const path = require('path');
module.exports = function (api, options) {
  const { getWebpackConfig, getValue, emitHooks } = api;
  const dir = process.cwd();
  const config = getWebpackConfig();

  config
    .entry('index')
    .clear()
    .add(path.resolve(dir, './src/entry/index.js'))
    .end();

  config.entry('login').add(path.resolve(dir, './src/entry/login.js')).end();

  config.module
    .rule('ejs')
    .test(/\.ejs/)
    .exclude.add(/node_modules/)
    .end()
    .use('ejs-loader')
    .loader('ejs-loader')
    .options({ esModule: false });

  config.plugin('HtmlWebpackPlugin').use(HtmlWebpackPlugin, [
    {
      filename: 'index.html',
      template: path.resolve(dir, './src/html/index.html'),
      chunks: ['index'],
    },
  ]);

  config.plugin('HtmlWebpackPlugin2').use(HtmlWebpackPlugin, [
    {
      filename: 'login.html',
      template: path.resolve(dir, './src/html/login.html'),
      chunks: ['login'],
    },
  ]);

  // config.plugin('MiniCssExtractPlugin').use(MiniCssExtractPlugin, [
  //   {
  //     filename: path.resolve(dir, 'css/[name].[hash:6].css'),
  //     chunkFilename: path.resolve(dir, 'css/[name].[hash:6].css'),
  //   },
  // ]);

  config.plugin('ProvidePlugin').use(webpack.ProvidePlugin, [
    {
      $: 'jquery',
      jQuery: 'jquery',
    },
  ]);

  config.plugin('CopyPlugin').use(CopyPlugin, [
    {
      patterns: [
        {
          from: path.resolve(dir, './src/img'),
          to: path.resolve(dir, './dist/img'),
        },
      ],
    },
  ]);
};
