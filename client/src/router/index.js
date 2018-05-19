import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Layout from '../components/Layout/Layout';
import ProjectMenu from '../components/Projects/Menu/Menu';
import ProjectContent from '@/components/Projects/Content/Content';

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
            content: ProjectContent
          }
        }
      ]
    }
  ]
});
