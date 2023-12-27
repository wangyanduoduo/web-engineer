/*
 * @Author: wy
 * @Date: 2023-12-25 17:08:18
 * @LastEditors: wy
 * @LastEditTime: 2023-12-26 17:18:14
 * @FilePath: /笔记/web-engineer/project-test/src/mpa/index.js
 * @Description:
 */
import { createApp } from 'vue';
import App from '../pages/index.vue';
// import router from '../router';

const app = createApp(App);

// app.use(router);

app.mount('#app');
