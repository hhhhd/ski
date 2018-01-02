import Vue from 'vue'
import Component from 'vue-class-component'

const template = require('./template.html')
require('./style.less')

@Component({
  template,
  props: {
    show: String,
  }
})
export default class Button extends Vue {
  close() {
    this.show = false;
    setTimeout(() => { this.show = true }, 400);
  }
}
