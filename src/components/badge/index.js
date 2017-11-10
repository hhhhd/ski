import Vue from 'vue'
import Component from 'vue-class-component'

const template = require('./template.html')
require('./style.less')

@Component({
  template,
  props: {
    isShow: String,
    color: String,
    msg: String
  }
})
export default class Badge extends Vue {
  showBig = null
  showMid = null
  showMin = null
  CBlue = null
  CRed = null
  CGreen = null
  CYellow = null
  mounted() {
    if (this.isShow === 'big') {
      this.showBig = true
      this.showMid = false
      this.showMin = false
    } else if (this.isShow === 'mid') {
      this.showBig = false
      this.showMid = true
      this.showMin = false
    } else if (this.isShow === 'min') {
      this.showBig = false
      this.showMid = false
      this.showMin = true
    } else {
      console.log('请输入 big、mid、min 来选大小')
    }
    if (this.color === 'blue') {
      this.CBlue = true
      this.CRed = false
      this.CGreen = false
      this.CYellow = false
    } else if (this.color === 'red') {
      this.CBlue = false
      this.CRed = true
      this.CGreen = false
      this.CYellow = false
    } else if (this.color === 'green') {
      this.CBlue = false
      this.CRed = false
      this.CGreen = true
      this.CYellow = false
    } else if (this.color === 'yellow') {
      this.CBlue = false
      this.CRed = false
      this.CGreen = false
      this.CYellow = true
    } else {
      console.log('请输入颜色')
    }
  }
}
