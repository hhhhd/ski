import Vue from 'vue'
import Component from 'vue-class-component'

const template = require('./template.html')
require('./style.less')

@Component({
  template,
  props: {
    defaultText: String,
    msg: String
  }
})
export default class Field extends Vue { }
