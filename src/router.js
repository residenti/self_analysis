// Router.

import VueRouter from 'vue-router'

import Top from './components/Top'
import Question from './components/Question'
import NotFound from './components/NotFound'
import Summary from './components/Summary'

// 各pathに対応するvueのcomponentのマッピングを指定しておく.
const routes = [
  { path: '/', component: Top },
  { path: '/NotFound', component: NotFound },
  { path: '/question/:id', component: Question, props: true },
  { path: '/summary', component: Summary }
]

export default new VueRouter({
  routes
})
