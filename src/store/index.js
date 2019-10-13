import User from './user'
import AnswerSheet from './answer-sheet'
import questions from '../master/questions'

const me = new User()
const answerSheet = new AnswerSheet(me, questions)

export default {
  state: {
    me,
    answerSheet
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

  saveAnswer: function(questionId, answerIdx) {
    this.state.answerSheet.saveAnswer(questionId, answerIdx)
  },

  correctAnswers: function() {
    return this.state.answerSheet.correctAnswers()
  }

}
