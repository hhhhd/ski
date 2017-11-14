import Vue from 'vue'
import Component from 'vue-class-component'

const template = require('./template.html')
require('./style.less')

@Component({
  template,
  props: {
    defaultText: String,
    msg: String,
    type: String
  }
})
export default class Field extends Vue {
  value = null
  Stext = false
  Sbirthday = false
  Stextarea = false
  Snumber = false
  Sverification = false
  mounted() {
    if (this.type === 'text') {
      this.Stext = true
      this.Sbirthday = false
      this.Stextarea = false
      this.Snumber = false
      this.Sverification = false
    } else if (this.type === 'birthday') {
      this.Stext = false
      this.Sbirthday = true
      this.Stextarea = false
      this.Snumber = false
      this.Sverification = false
    } else if (this.type === 'self') {
      this.Stext = false
      this.Sbirthday = false
      this.Stextarea = true
      this.Snumber = false
      this.Sverification = false
    } else if (this.type === 'number') {
      this.Stext = false
      this.Sbirthday = false
      this.Stextarea = false
      this.Snumber = true
      this.Sverification = false
    } else if (this.type === 'verification') {
      this.Stext = false
      this.Sbirthday = false
      this.Stextarea = false
      this.Snumber = false
      this.Sverification = true
    }
  }
  Svalue(e) {
    this.value = e.target.value
    this.$emit('getValue', this.value)
  }
  submit() {
    this.$emit('getValue', this.value)
  }
}
