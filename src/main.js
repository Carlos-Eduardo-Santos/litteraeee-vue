// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VeeValidate from 'vee-validate'
import msg from './pt_BR'

Vue.config.productionTip = false

Vue.use(VeeValidate, {
  locale: 'pt_BR',
  dictionary: {
    pt_BR: {
      messages: msg
    }
  }
})

Vue.use(VueResource)

Vue.http.options.root = 'http://api.pearson.com/v2/dictionaries/brep/'

/* eslint-disable no-new */
/* eslint-disable eol-last */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})