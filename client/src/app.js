import Vue from 'vue';
import './css/index.scss';

import { router } from './router';
import { store } from './store';
import './api';

import { VueTooltip } from '@kashio/vue-tooltip';
import '@kashio/vue-tooltip/dist/index.css';

Vue.use(VueTooltip);

export default new Vue({
  el: '#app',
  router,
  store,
  render: h => h('router-view')
});
