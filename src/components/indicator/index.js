import Vue from 'vue'
import Component from 'vue-class-component'

const template = require('./template.html')
require('./style.less')

@Component({
  template,
  props: {
    showText: String,
    show: String,
    msg: String,
  }
})
export default class indicator extends Vue {}
