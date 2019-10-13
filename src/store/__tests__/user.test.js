import User from '../user'

describe('User', () => {
  describe('#userId', () => {
    it('ユーザーIDを設定できること', () => {
      const user = new User()
      user.userId = 111
      expect(user.userId).toBe(111)
    })
  })
})
