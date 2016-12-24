import Vue from 'vue';

import { router } from '../../../router';

import Header from './Header.vue';

describe('Header', () => {
  it('should be named Header', () => {
    expect(Header.name).toEqual('Header');
  });
  it('should have correct default data', () => {
    expect(Header.data()).toEqual({
      name: 'Webcrow',
      version: '1.0.0'
    });
  });
  it('should render correctly', () => {
    const injector = require('!!vue?inject!./Header.vue');
    const MockedComponent = injector({
      '../../../services/brand': {
        name: 'Test',
        version: '1.2.3'
      }
    });
    const vm = new Vue({
      render: h => h('div', [h('test')]),
      router,
      components: {
        test: MockedComponent
      }
    }).$mount();
    expect(vm.$el.querySelector('.brand').attributes.getNamedItem('href').value).toBe('/');
    expect(vm.$el.querySelector('.brand-name').textContent).toBe('Test');
    expect(vm.$el.querySelector('.brand-version').textContent).toBe('1.2.3');
  });
});
