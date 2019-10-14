import data from '../data/options.json'

import User from './user'
import AnswerSheet from './answer-sheet'
import Option from './option'

const me = new User()
const answerSheet = new AnswerSheet(me)
const options = data.map( d => new Option(d) )

export default {
  state: {
    me,
    answerSheet,
    options
  },

  userId: function() {
    return this.state.me.userId
  },

  saveUserId: function(userId) {
    this.state.me.userId = userId
  },

  startTime: function() {
    return this.state.answerSheet.startTime
  },

  saveStartTime: function(time) {
    this.state.answerSheet.startTime = time
  },

  options: function() {
    return this.state.options
  },

  incrementCountOfOption: function(id) {
    this.state.options.find( option => option.id === id ).count++
  },

  closeOption: function(id) {
    this.state.options.find( option => option.id === id ).closed = true
  },

  // ここに定義すべきじゃない...
  maxIdOfOption: function() {
    return Math.max(...data.map(d => d.id))
  }

}
