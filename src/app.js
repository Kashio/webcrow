import Vue from 'vue';

import './index.scss';

import { router } from './router/router';

export default new Vue({
  el: '#app',
  router,
  render: h => h('router-view')
});
