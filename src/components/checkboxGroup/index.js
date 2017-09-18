import Vue from 'vue'
import Component from 'vue-class-component'
import checkbox from '../checkbox'

const template = require('./template.html')
require('./style.less')

@Component({
  template,
  components: {
    's-checkbox': checkbox
  },
  props: {
    checked: Array,
  },
})

export default class checkboxGroup extends Vue {
  status = this.checked
}
