// Router.

import VueRouter from 'vue-router'

import Top from './components/Top'
import AnswerSheet from './components/AnswerSheet'
import NotFound from './components/NotFound'
import Summary from './components/Summary'

// 各pathに対応するvueのcomponentのマッピングを指定しておく.
const routes = [
  { path: '/', component: Top },
  { path: '/NotFound', component: NotFound },
  { path: '/answerSheet', component: AnswerSheet },
  { path: '/summary', component: Summary }
]

export default new VueRouter({
  routes
})
