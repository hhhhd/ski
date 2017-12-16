import Vue from 'vue'
import Component from 'vue-class-component'

const template = require('./template.html')
require('./style.less')

@Component({
  template,
  props: {
    msg: String,
    value: String,
  },
})
export default class toast extends Vue {
  isShow = false
  valueOne = null
  valueTwo = null

  mounted() {
    if (this.value === '1') {
      this.valueOne = true
      console.log(3)
    } else if (this.value === '2') {
      this.valueTwo = true
      console.log(2)
    } else {
      this.valueOne = true
      this.valueTwo = true
      console.log(1)
    }
  }

  show() {
    this.isShow = true
  }
}
