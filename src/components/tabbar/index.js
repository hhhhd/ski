import Vue from 'vue'
import Component from 'vue-class-component'

const template = require('./template.html')
require('./style.less')

@Component({
  template,
  props: {
    boxOne: Array,
    boxTwo: Array,
    boxThree: Array,
    boxFour: Array
  }
})
export default class Tabbar extends Vue {
  SOne = true
  STwo = false
  SThree = false
  SFour = false
  showOne() {
    this.SOne = true
    this.STwo = false
    this.SThree = false
    this.SFour = false
  }
  showTwo() {
    this.SOne = false
    this.STwo = true
    this.SThree = false
    this.SFour = false
  }
  showThree() {
    this.SOne = false
    this.STwo = false
    this.SThree = true
    this.SFour = false
  }
  showFour() {
    this.SOne = false
    this.STwo = false
    this.SThree = false
    this.SFour = true
  }
}
