export class Answer {

  constructor(question, answerIdx) {
    this._question = question
    this._answerIdx = answerIdx
  }

  get isCorrect() {
    return this._question.isCorrect(this._answerIdx)
  }

}

export default class AnswerSheet {

  constructor(user, masterData) {
    this._user = user
    this._masterData = masterData
    this._history = {}
    this._startTime = void 0
  }

  set startTime(time) {
    this._startTime = time
  }

  get startTime() {
    return this._startTime
  }

  saveAnswer(questionId, answerIdx) {
    const question = this._masterData.find(questionId)
    this._history[questionId] = new Answer(question, answerIdx)
  }

  correctAnswers() {
    const ids = Object.keys(this._history)
    return ids.filter(id => this._history[id].isCorrect)
      .map(id => this._history[id])
  }

}
