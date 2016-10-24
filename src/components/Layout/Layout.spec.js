import Vue from 'vue';

import { router } from '../../router';

import Layout from './Layout.vue';
import Header from './Header/Header.vue';
import Navbar from './Navbar/Navbar.vue';

describe('Layout', () => {
  it('should be named Layout', () => {
    expect(Layout.name).toEqual('Layout');
  });
  xit('should have correct default components', () => {
    expect(Layout.components).toEqual({
      'header-component': Header,
      'navbar-component': Navbar
    });
  });
  xit('should render correctly', () => {
    const vm = new Vue({
      render: h => h('div', [h('test')]),
      router,
      components: {
        test: Layout
      }
    }).$mount();
    expect(vm.$el.querySelector('.links').childElementCount).toBe(1);
    expect(vm.$el.querySelector('.link').attributes.getNamedItem('href').value).toEqual('/test');
    expect(vm.$el.querySelector('.link').firstElementChild.className).toEqual('fa fa-archive');
    expect(vm.$el.querySelector('.menu p').textContent).toBe('Test');
  });
});
