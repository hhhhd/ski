import Vue from 'vue'
import Component from 'vue-class-component'

const template = require('./template.html')
require('./style.less')

@Component({
  template,
  props: {
    title: String,
    type: String,
  },
})
export default class Button extends Vue {
  sd = false
  back() {
    this.sd = true
    console.log('返回')
  }
}
