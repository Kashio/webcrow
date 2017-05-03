import Vue from 'vue';
import { truncatedTitle } from './truncated_title/truncated_title';
import { focusToggle } from './focus_toggle/focus_toggle';

Vue.directive('truncated-title', truncatedTitle);
Vue.directive('focus-toggle', focusToggle);
