import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Layout from '../components/Layout/Layout.vue';
import ProjectMenu from '../components/Projects/Menu/Menu.vue';

const Bar = { render: h => h('div', 'Bar') };

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/project',
      children: [
        {
          path: '/project',
          name: 'project',
          components: {
            menu: ProjectMenu,
            main: Bar
          }
        }
      ]
    }
  ]
});
