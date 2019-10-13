// Router.

import VueRouter from 'vue-router'

import HelloWorld from './components/HelloWorld'
import NotFound from './components/NotFound'

// 各pathに対応するvueのcomponentのマッピングを指定しておく.
const routes = [
  { path: '/', component: HelloWorld },
  { path: '/NotFound', component: NotFound }
]

export default new VueRouter({
  routes
})
