import Vue from 'vue';
import './css/index.scss';

import { router } from './router';
import { store } from './store';
import './api';
import './directives';

import { VueTooltip } from '@kashio/vue-tooltip';
import '@kashio/vue-tooltip/dist/index.css';

import { VueToast } from '@kashio/vue-toast';
import '@kashio/vue-toast/dist/index.css';

Vue.use(VueTooltip);
Vue.use(VueToast);

Vue.maxToasts = 3;

export default new Vue({
  el: '#app',
  router,
  store,
  render: h => h('router-view')
});
