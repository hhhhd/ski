import Vue from 'vue'
import Component from 'vue-class-component'

const template = require('./template.html')
require('./style.less')

@Component({
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean,
  },
  template,
})
export default class Switching extends Vue {
  isOn = false
  isOff = true

  emitClick() {
    // this.$emit('on-off', this.switching)
    if (this.isOn === false) {
      this.isOn = true
      this.isOff = false
      this.$emit('change', this.isOn);
    } else {
      this.isOn = false
      this.isOff = true
      this.$emit('change', this.isOn);
    }
  }
}
