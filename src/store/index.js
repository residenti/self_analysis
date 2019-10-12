import User from './user'
import AnswerSheet from './answer-sheet'

const me = new User()
const answerSheet = new AnswerSheet(me)

export default {
  state: {
    me,
    answerSheet
  },

  saveUserId: function(userId) {
    this.state.me.userId = userId
  },

  saveAnswer: function(questionId, answerIdx) {
    this.state.answerSheet.saveAnswer(questionId, answerIdx)
  }
}
