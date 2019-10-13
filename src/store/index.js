import User from './user'

const me = new User()

export default {
  state: {
    me
  },

  userId: function() {
    return this.state.me.userId
  },

  saveUserId: function(userId) {
    this.state.me.userId = userId
  }
}
