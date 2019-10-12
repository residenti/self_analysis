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
    return this._datum.answerCandidates.map((val, idx) => ({ text: val.text, idx }))
  }

  static find(id) {
    const datum = data.find(d => d.id === parseInt(id, 10))

    if (!datum) {
      throw new NotFoundError()
    }

    return new Question(datum)
  }

  static maxId() {
    return Math.max(...data.map(d => d.id))
  }
}

export default {
  find: (id) => Question.find(id),

  next: (id) => {
    const nextId = parseInt(id, 10) + 1
    return nextId <= Question.maxId() ? nextId : void 0
  }
}
