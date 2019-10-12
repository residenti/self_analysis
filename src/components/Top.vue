<template>
  <div class="top">
    <h1>フルーツバスケットクイズ</h1>
    <label>No. 記入欄
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
</style>
