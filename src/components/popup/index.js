import Vue from 'vue'
import Component from 'vue-class-component'

const template = require('./template.html')
require('./style.less')

@Component({
  template,
  props: {
    msg: String,
    isShow: Boolean,
  }
})
export default class Button extends Vue {
  close() {
    this.isShow = !this.isShow
  }
}
