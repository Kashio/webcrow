import Vue from 'vue';
import './css/index.scss';
import './directives';
import { router } from './router';

export default new Vue({
  el: '#app',
  router,
  render: h => h('router-view')
});
