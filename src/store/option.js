import data from '../data/options.json'
import { NotFoundError } from '.'

export default class Option {
  constructor(datum) {
    this._id = datum.id
    this._text = datum.text
    this._count = 0
    this._closed = false
  }

  get id() {
    return this._id
  }

  get text() {
    return this._text
  }

  get count() {
    return this._count
  }

  get closed() {
    return this._closed
  }

  set count(number) {
    this._count = number
  }

  // 良い引数名が思い浮かばない...
  set closed(voolean) {
    this._closed = voolean
  }
}

export function int(num) {
  return parseInt(num, 10)
}
