import Vue from 'vue'
import button from '../../../src/components/button'

describe('button', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(button);
    const vm = new Constructor().$mount();
    expect(vm.$el.nodeName)
      .to.equal('BUTTON');
  });
});
