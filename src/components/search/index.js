import Vue from 'vue'
import Component from 'vue-class-component'

const template = require('./template.html')
require('./style.less')

@Component({
  template
})
export default class Button extends Vue {
  value = null
  input(e) {
    this.value = e.target.value
    console.log(this.value)
  }
  upload() {
    this.$emit('value', this.value)
  }
}
