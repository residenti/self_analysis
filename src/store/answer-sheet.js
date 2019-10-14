export default class AnswerSheet {

  constructor(user) {
    this._user = user
    this._startTime = void 0
  }

  set startTime(time) {
    this._startTime = time
  }

  get startTime() {
    return this._startTime
  }

}
