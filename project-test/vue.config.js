/*
 * @Author: wy
 * @Date: 2024-01-16 16:14:25
 * @LastEditors: wy
 * @LastEditTime: 2024-01-16 16:18:57
 * @FilePath: /笔记/web-engineer/project-test/vue.config.js
 * @Description:
 */
// 这里配合wy-build-vue-cli-config 配置实现自定义的wy-build 工具和vue结合，启动项目
const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const dir = process.cwd();
module.exports = {
  chainWebpack: (config) => {
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
  },
};
