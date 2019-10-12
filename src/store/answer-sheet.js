import questions from '../master/questions'

export class Answer {
  constructor(questionId, answerIdx) {
    this._questionId = questionId
    this._answerIdx = answerIdx
  }

  get isCorrect() {
    const question = questions.find(this._questionId)
    return question.isCorrect(this._answerIdx)
  }
}

export default class AnswerSheet {
  constructor(user) {
    this._user = user
    this._history = {}
  }

  saveAnswer(questionId, answerIdx) {
    this._history[questionId] = new Answer(questionId, answerIdx)
  }

  correctAnswers() {
    const ids = Object.keys(this._history)
    return ids.filter(id => this._history[id].isCorrect)
  }
}
