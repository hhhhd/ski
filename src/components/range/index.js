import Vue from 'vue'
import Component from 'vue-class-component'

const template = require('./template.html')
require('./style.less')

@Component({
  template,
  props: {
    setValue: String,
    setStep: String,
    type: String,
  }
})
export default class Range extends Vue {
  mounted() {
    console.log(this.type)
  }
}
