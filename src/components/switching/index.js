import Vue from 'vue'
import Component from 'vue-class-component'

const template = require('./template.html')
require('./style.less')

@Component({
  template,
})
export default class Switching extends Vue {
  switching = ''
  round = ''

  change() {
    if (this.switching === 's-switching__container_true') {
      this.switching = 's-switching__container_folse'
      this.round = 's-switching__round_folse'
    } else {
      this.switching = 's-switching__container_true'
      this.round = 's-switching__round_true'
    }
  }
}
