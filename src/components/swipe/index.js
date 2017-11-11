import Vue from 'vue'
import Component from 'vue-class-component'

const template = require('./template.html')
require('./style.less')

@Component({
  template
})
export default class Swipe extends Vue {
  isFalse = true
  isTrueOne = true
  isTrueTwo = false
  isTrueThree = false
  isRoundOne = true
  isRoundTwo = false
  isRoundThree = false
  intervalId = null
  mounted() {
    this.GoScroll()
    this.intervalId = setInterval(this.GoScroll, 9000)
  }
  GoScroll() {
    setTimeout(() => {
      console.log('第一步')
      this.isTrueOne = true
      this.isTrueTwo = false
      this.isTrueThree = false
      this.isRoundOne = true
      this.isRoundTwo = false
      this.isRoundThree = false
      setTimeout(() => {
        console.log('第三步')
        this.isTrueOne = false
        this.isTrueTwo = true
        this.isTrueThree = false
        this.isRoundOne = false
        this.isRoundTwo = true
        this.isRoundThree = false
        setTimeout(() => {
          console.log('第五步')
          this.isTrueOne = false
          this.isTrueTwo = false
          this.isTrueThree = true
          this.isRoundOne = false
          this.isRoundTwo = false
          this.isRoundThree = true
        }, 3000);
      }, 3000);
    }, 0);
  }
  toOne() {
    this.isTrueOne = true
    this.isTrueTwo = false
    this.isTrueThree = false
    this.isRoundOne = true
    this.isRoundTwo = false
    this.isRoundThree = false
  }
  toTwo() {
    this.isTrueOne = false
    this.isTrueTwo = true
    this.isTrueThree = false
    this.isRoundOne = false
    this.isRoundTwo = true
    this.isRoundThree = false
  }
  toThree() {
    this.isTrueOne = false
    this.isTrueTwo = false
    this.isTrueThree = true
    this.isRoundOne = false
    this.isRoundTwo = false
    this.isRoundThree = true
  }
}
