/*
 * @Author: wy
 * @Date: 2024-01-16 14:56:10
 * @LastEditors: wy
 * @LastEditTime: 2024-01-16 15:54:49
 * @FilePath: /笔记/web-engineer/project-test/plugins/zbest-vue-cli-plugin.js
 * @Description:
 */
const Service = require('@vue/cli-service/lib/Service');
module.exports = function () {
  const service = new Service(process.cwd());
  service.run('serve');
};
