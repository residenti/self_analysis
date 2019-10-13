export class NotFoundError extends Error {
  constructor() {
    super()
    this.message = 'Specified page is not found.'
  }
}
