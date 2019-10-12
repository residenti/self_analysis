export default class User {
  constructor() {
    this._userId = void 0
  }

  set userId(id) {
    this._userId = id
  }

  get userId() {
    return this._userId
  }
}
