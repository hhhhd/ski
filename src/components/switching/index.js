import Vue from 'vue'
import Component from 'vue-class-component'

const template = require('./template.html')
require('./style.less')

@Component({
  template,
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean,
  },
  watch: {
    checked(val) {
      this.myChecked = val
    },
    myChecked(val) {
      this.$emit('change', val)
    }
  }
})
export default class Switching extends Vue {

  myChecked = this.checked

  emitClick() {
    this.myChecked = !this.myChecked
  }
}
