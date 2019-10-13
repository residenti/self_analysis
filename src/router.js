// Router.

import VueRouter from 'vue-router'

import Top from './components/Top'
import NotFound from './components/NotFound'

// 各pathに対応するvueのcomponentのマッピングを指定しておく.
const routes = [
  { path: '/', component: Top },
  { path: '/NotFound', component: NotFound }
]

export default new VueRouter({
  routes
})
