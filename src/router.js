// router

import VueRouter from 'vue-router'

import Top from './components/Top'
import Question from './components/Question'

// 各pathに対応するvueのcomponentのマッピングを指定しておく
const routes = [
  { path: '/', component: Top },
    { path: '/question/:id', component: Question, props: true }
]

export default new VueRouter({
  routes
})
