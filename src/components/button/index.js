import Vue from 'vue'
import Component from 'vue-class-component'

const template = require('./template.html')
require('./style.less')

@Component({
  template,
  props: {
    type: String,
    size: String
  }
})
export default class Button extends Vue {
  showType() {
    console.log(typeof this.type, typeof this.size)
  }
}
