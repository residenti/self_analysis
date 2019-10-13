import Vue from 'vue'
import VueRouter from 'vue-router'

import router from './router'
import App from './App.vue'
import {NotFoundError} from './master'

Vue.use(VueRouter)

Vue.config.productionTip = false

Vue.config.errorHandler = function (err, vm, info) {
  if (err instanceof NotFoundError) {
    // FIXME: NotFoundって別にquestionに限らないのでは？？
    router.push('/question/NotFound').catch(err => {})
  } else {
    console.error(err)
  }
}

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
