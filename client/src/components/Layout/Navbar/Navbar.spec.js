import Vue from 'vue';

import {router} from '../../../router';

import {VueTooltip} from '@kashio/vue-tooltip';
import '@kashio/vue-tooltip/dist/index.css';

Vue.use(VueTooltip);

import Navbar from './Navbar';

describe('Navbar', () => {
  it('should be named Navbar', () => {
    expect(Navbar.name).toEqual('Navbar');
  });
  it('should have correct default data', () => {
    expect(Navbar.data()).toEqual({
      links: [
        {
          icon: 'fa-archive',
          description: 'Projects',
          to: '/project'
        },
        {
          icon: 'fa-book',
          description: 'Reports',
          to: '/reports'
        },
        {
          icon: 'fa-cubes',
          description: 'Workers',
          to: '/workers'
        }
      ]
    });
  });
  it('should render correctly', () => {
    const injector = require('!!vue-loader?inject!./Navbar');
    const MockedComponent = injector({
      '../../../services/links': {
        links: [
          {
            icon: 'fa-archive',
            description: 'Test',
            to: '/test'
          }
        ]
      }
    });
    const vm = new Vue({
      render: h => h('div', [h('test', [h('p', {
        slot: 'menu'
      }, 'Test')])]),
      router,
      components: {
        test: MockedComponent
      }
    }).$mount();
    expect(vm.$el.querySelector('.links').childElementCount).toBe(1);
    expect(vm.$el.querySelector('.link').attributes.getNamedItem('href').value).toEqual('/test');
    expect(vm.$el.querySelector('.link').firstElementChild.className).toEqual('fa fa-archive');
    expect(vm.$el.querySelector('.menu p').textContent).toBe('Test');
  });
});
