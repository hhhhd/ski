import Vue from 'vue'
import Component from 'vue-class-component'

const template = require('./template.html')
require('./style.less')

@Component({
  template,
  props: {
    setValue: Number,
    setStep: Number,
  }
})
export default class Range extends Vue {
}
