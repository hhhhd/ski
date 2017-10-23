import Vue from 'vue'
import Component from 'vue-class-component'

const template = require('./template.html')
require('./style.less')

@Component({
  template,
  props: {
    isShow: Boolean,
  }
})
export default class Button extends Vue {
  showBox = false
  close() {
    this.isShow = false;
    setTimeout(() => { this.showBox = true }, 400);
  }
}
