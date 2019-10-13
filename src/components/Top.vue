<template>
  <div class="top">
    <h1 class="title">No. 記入欄</h1>
    <input type="text" v-model="userId" />
    <div class="button-group">
      <router-link
        to="/question/1"
        class="button"
        v-on:click.native="startAnswer"
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
    startAnswer: function() {
      store.saveUserId(this.userId)
      store.saveStartTime(Date.now())
    }
  }
}
</script>

<style scoped>
.title {
  color: #00a1e9;
}
</style>
