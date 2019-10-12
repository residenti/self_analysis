<template>
  <div class="top">
    <h1 class="title">適当なクイズ</h1>
    <label class="user-id">No. 記入欄:
      <input type="text" v-model="userId" />
    </label>
    <div class="button-group">
      <router-link
        to="/question/1"
        class="button"
        v-on:click.native="saveUserId"
      >
        始める
      </router-link>
    </div>
  </div>
</template>

<script>
import store from '../store'

export default {
  name: 'Top',

  data: function() {
    return {
      userId: ''
    }
  },

  methods: {
    saveUserId: function() {
      store.saveUserId(this.userId)
    }
  }
}
</script>

<style scoped>
.title {
  color: #00a1e9;
}
</style>
