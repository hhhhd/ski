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
  mounted() {
    setInterval(this.GoScroll, 2000)
  }
  GoScroll() {
    setTimeout(() => {
      console.log('第一步')
      this.isTrueOne = true
      this.isTrueTwo = false
      this.isTrueThree = false
      console.log('第二步')
      setTimeout(() => {
        console.log('第三步')
        this.isTrueOne = false
        this.isTrueTwo = true
        this.isTrueThree = false
        setTimeout(() => {
          console.log('第四步')
          this.isTrueOne = false
          this.isTrueTwo = false
          this.isTrueThree = true
        }, 4000);
      }, 2000);
    }, 0);
  }
}
