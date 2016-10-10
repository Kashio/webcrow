import Vue from 'vue';

import './index.scss';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Main from './components/Main.vue';
const Foo = {render: h => h('div', 'Hi')};

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [
        {
          path: '/project',
          name: 'project',
          component: Foo
        }
      ],
      redirect: '/project'
    }
  ]
});

export default new Vue({
  el: '#app',
  router,
  render: h => h('router-view')
});
