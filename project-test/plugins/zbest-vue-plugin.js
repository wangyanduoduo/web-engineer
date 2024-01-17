/*
 * @Author: wy
 * @Date: 2024-01-16 13:30:52
 * @LastEditors: wy
 * @LastEditTime: 2024-01-16 13:54:03
 * @FilePath: /笔记/web-engineer/project-test/plugins/zbest-vue-plugin.js
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

module.exports = function (api, options) {
  const { getWebpackConfig, getValue, emitHooks } = api;
  const dir = process.cwd();
  const config = getWebpackConfig();

  config.entry('index').clear().add(path.resolve(dir, './src/main.js')).end();

  config.module
    .rule('ejs')
    .test(/\.ejs/)
    .exclude.add(/node_modules/)
    .end()
    .use('ejs-loader')
    .loader('ejs-loader')
    .options({ esModule: false });

  config.module
    .rule('vue')
    .test(/\.vue/)
    .exclude.add(/node_modules/)
    .end()
    .use('vue-loader')
    .loader('vue-loader');

  config.plugin('HtmlWebpackPlugin').use(HtmlWebpackPlugin, [
    {
      filename: 'index.html',
      template: path.resolve(dir, './src/public/index.html'),
      chunks: ['index'],
    },
  ]);

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

  config.plugin('VueLoaderPlugin').use(VueLoaderPlugin);
};
