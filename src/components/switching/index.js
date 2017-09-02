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
})
export default class Switching extends Vue {

  emitClick() {
    this.$emit('change', !this.checked)
  }
}
