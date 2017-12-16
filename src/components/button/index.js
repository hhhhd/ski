import Vue from 'vue'
import Component from 'vue-class-component'

const template = require('./template.html')
require('./style.less')

@Component({
  template,
  props: {
    type: String,
    size: String
  }
})
export default class Button extends Vue {}
