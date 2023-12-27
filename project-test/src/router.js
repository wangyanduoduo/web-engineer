/*
 * @Author: wy
 * @Date: 2023-12-26 10:59:35
 * @LastEditors: wy
 * @LastEditTime: 2023-12-26 17:26:12
 * @FilePath: /笔记/web-engineer/project-test/src/router.js
 * @Description:
 *
 *
 */
import { createRouter, createWebHashHistory } from 'vue-router';
import Index from './pages/index.vue';
import Login from './pages/login.vue';

const routes = [
  { path: '/', redirect: '/index' },
  { name: 'index', path: '/index', component: Index },
  { name: 'login', path: '/login', component: Login },
];
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;
