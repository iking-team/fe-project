/*
 * @Author: fe-project 
 * @Date: 2022-01-10 10:54:08 
 * @Last Modified by: wita.wang
 * @Last Modified time: 2022-01-10 17:20:37
 */

import Vue from 'vue';
import Router from 'vue-router';
const originalReplace = Router.prototype.replace;
//路由重写区
Router.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err);
};
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};
Vue.use(Router)
//路由导入区
import mainRouter from './mainRouter'
import navRouter from './navRouter';
export default new Router({
    //nginx 配置
    base: '/fe-project/',
    mode: 'history',
    routes: [
      navRouter,
      mainRouter,
      {
        path: '/404',
        component: () => import('../views/error/Page404'),
        hidden: true
      },
      { path: '*', redirect: '/404', hidden: true }
    ]
  })