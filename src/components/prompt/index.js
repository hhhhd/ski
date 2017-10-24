import Vue from 'vue'
import Component from 'vue-class-component'

const template = require('./template.html')
require('./style.less')

@Component({
  template
})
export default class Button extends Vue {
  iValue = null;
  isShow = false;
  upload() {
    this.$emit('value', this.iValue)
  }
  close() {
    this.$emit('isShow', this.isShow)
  }
  inputValue(e) {
    this.iValue = e.target.value
    console.log(this.iValue)
  }
}
