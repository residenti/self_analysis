// router

import VueRouter from 'vue-router'

import Foo from './components/Foo'
import Bar from './components/Bar'

// 各pathに対応するvueのcomponentのマッピングを指定しておく
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

export default new VueRouter({
  routes
})
