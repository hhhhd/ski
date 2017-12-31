import Vue from 'vue'
import Component from 'vue-class-component'

const template = require('./template.html')
require('./style.less')

@Component({
  template,
  props: {
    msg: String,
    type: String,
    show: String,
  },
})
export default class toast extends Vue {}
