import Vue from 'vue'
import Component from 'vue-class-component'

const template = require('./template.html')
require('./style.less')

@Component({
  template,
  props: {
    defaultText: String,
    msg: String,
    type: String
  }
})
export default class Field extends Vue {
  value = null
  Svalue(e) {
    this.value = e.target.value
    this.$emit('getValue', this.value)
  }
  submit() {
    this.$emit('getValue', this.value)
  }
}
