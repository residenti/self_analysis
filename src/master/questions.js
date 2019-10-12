import data from '../data/questions.json'
import { NotFoundError } from '.'

export class Question {
  constructor(datum) {
    this._datum = datum
  }

  get text() {
    return this._datum.text
  }

  static find(id) {
    const datum = data.find(d => d.id === parseInt(id, 10))

    if (!datum) {
      throw new NotFoundError()
    }

    return new Question(datum)
  }
}

export default {
  find: (id) => Question.find(id)
}
