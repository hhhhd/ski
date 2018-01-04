import Vue from 'vue'
import Component from 'vue-class-component'

const template = require('./template.html')
require('./style.less')

@Component({
  template
})
export default class Swipe extends Vue {
  boxArr = []
  roundArr = []
  intervalId = null
  mounted() {
    console.log(this.intervalId)
  }
  GoScroll() {
    setTimeout(() => {
      this.toOne()
      setTimeout(() => {
        this.toTwo()
        setTimeout(() => {
          this.toThree()
        }, 3000);
      }, 3000);
    }, 0);
  }
  toOne() {
    this.roundArr = [1]
    this.boxArr = [1]
    console.log(this.roundArr, this.boxArr)
  }
  toTwo() {
    this.roundArr = [2]
    this.boxArr = [2]
    console.log(this.roundArr, this.boxArr)
  }
  toThree() {
    this.roundArr = [3]
    this.boxArr = [3]
    console.log(this.roundArr, this.boxArr)
  }
}
