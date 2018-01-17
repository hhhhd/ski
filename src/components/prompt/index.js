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
  iValue = null;
  isShow = false;
  upload() {
    this.$emit('value', this.iValue)
    this.show = 'false'
  }
  close() {
    this.show = 'false'
  }
  inputValue(e) {
    this.iValue = e.target.value
    console.log(this.iValue)
  }
}
