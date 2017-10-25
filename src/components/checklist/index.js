import Vue from 'vue'
import Component from 'vue-class-component'

const template = require('./template.html')
require('./style.less')

@Component({
  template,
  props: {
    getArr: Array
  }
})
export default class Checklist extends Vue {
  isShow = false
  GoTrue() {
    this.isShow = !this.isShow
  }
}
