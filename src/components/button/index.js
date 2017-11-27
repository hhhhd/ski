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
export default class Button extends Vue {
  showDefault = null
  showdanger = null
  showPrimary = null
  sizeSml = null
  sizeMid = null
  sizeBig = null
  mounted() {
    if (this.type === 'Default' || this.type === 'default') {
      this.showDefault = true
    } else if (this.type === 'Danger' || this.type === 'danger') {
      this.showdanger = true
    } else if (this.type === 'Primary' || this.type === 'primary') {
      this.showPrimary = true
    } else {
      console.log('请输入Big、big、Sml、sml、Mid、mid')
    }
    if (this.size === 'Sml' || this.size === 'sml') {
      this.sizeSml = true
    } else if (this.size === 'Mid' || this.size === 'mid') {
      this.sizeMid = true
    } else if (this.size === 'Big' || this.size === 'big') {
      this.sizeBig = true
    } else {
      console.log('请输入Big、big、Sml、sml、Mid、mid')
    }
  }
}
