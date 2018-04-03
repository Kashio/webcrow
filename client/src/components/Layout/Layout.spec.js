import Vue from 'vue';

import {router} from '../../router';

import Layout from './Layout';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';

describe('Layout', () => {
  it('should be named Layout', () => {
    expect(Layout.name).toEqual('Layout');
  });
  it('should have correct default components', () => {
    expect(Layout.components).toEqual({
      Header,
      Navbar
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
