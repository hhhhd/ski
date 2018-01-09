import Vue from 'vue'
import Component from 'vue-class-component'

const template = require('./template.html')
require('./style.less')

@Component({
  template,
  props: {
    value: Number,
    title: Array,
  }
})
export default class TabContainer extends Vue {
  titleOne = this.title[0]
  titleTwo = this.title[1]
  titleThree = this.title[2]
  isShowOne = true
  isShowTwo = false
  isShowThree = false
  mounted() {
    if (this.value === 1) {
      this.ShowBoxOne()
    } else if (this.value === 2) {
      this.ShowBoxTwo()
    } else if (this.value === 3) {
      this.ShowBoxThree()
    } else {
      console.log('请输入1～3')
    }
  }
  ShowBoxOne() {
    this.isShowOne = true;
    this.isShowTwo = false;
    this.isShowThree = false;
  }
  ShowBoxTwo() {
    this.isShowOne = false;
    this.isShowTwo = true;
    this.isShowThree = false;
  }
  ShowBoxThree() {
    this.isShowOne = false;
    this.isShowTwo = false;
    this.isShowThree = true;
  }
}
