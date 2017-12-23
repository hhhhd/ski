import Vue from 'vue'
import Component from 'vue-class-component'

const template = require('./template.html')
require('./style.less')

@Component({
  template,
  props: {
    type: String,
    color: String,
    msg: String
  }
})
export default class Badge extends Vue {}
