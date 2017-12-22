import Vue from 'vue'
import Component from 'vue-class-component'

const template = require('./template.html')
require('./style.less')

@Component({
  template,
  props: {
    msg: String,
  },
  data() {
    return {
      isShow: false
    }
  }
})
export default class Button extends Vue {
  show() {
    this.isShow = true
    console.log(this.msg)
  }
}
