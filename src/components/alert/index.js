import Vue from 'vue'
import Component from 'vue-class-component'

const template = require('./template.html')
require('./style.less')

@Component({
  template,
  props: {
    msg: String,
    show: String,
  },
})
export default class Button extends Vue {
  isShow = this.show
  close() {
    this.isShow = true
  }
}
