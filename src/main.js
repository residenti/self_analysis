import Vue from 'vue'
import VueRouter from 'vue-router'

import router from './router'
import App from './App.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

Vue.config.errorHandler = function (err, vm, info) {
  console.log(err)
  // FIXME: ちょっとこのエラーハンドリングはザル過ぎない？？
  router.push('/question/NotFound').catch(err => {})
}

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
