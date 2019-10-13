import data from '../data/questions.json'
import { NotFoundError } from '.'

export class Question {
  constructor(datum) {
    this._datum = datum
  }

  get text() {
    return this._datum.text
  }

  get answerCandidates() {
    return this._datum.answerCandidates
      .map((val, idx) => ({ text: val.text, idx }))
  }

  isCorrect(answerIdx) {
    return this._datum.answerIndex === int(answerIdx)
  }

  static find(id) {
    const datum = data.find(d => d.id === int(id))

    if (!datum) {
      throw new NotFoundError()
    }

    return new Question(datum)
  }

  static maxId() {
    return Math.max(...data.map(d => d.id))
  }
}

// TODO: questions.jsonを注入するようにしてテスト書きたい
export default {
  // TODO: このfindメソッドはmemoizeしておきたい…
  find: (id) => Question.find(id),

  next: (id) => {
    const nextId = int(id) + 1
    return nextId <= Question.maxId() ? nextId : void 0
  },

  numOfTotalQuestions: () => Question.maxId()
}

export function int(num) {
  return parseInt(num, 10)
}
