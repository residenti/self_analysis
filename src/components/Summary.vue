<template>
  <div class="summary">
    <div class="user-id">対象No：{{ userId }}</div>
    <div>所要時間：{{ duration }}</div>
  </div>
</template>
<script>
import store from '../store'
export default {
  name: 'Summary',
  computed: {
    userId: function() {
      return store.userId()
    },
    duration: function() {
      // FIXME: 0:2 => 00:02 みたいに1桁なら0を頭に付与する.
      let diff_seconds = (Date.now() - store.startTime()) / 1000
      let seconds = Math.floor(diff_seconds % 60)
      let minutes = Math.floor((diff_seconds / 60) % 60)

      return minutes + ' : ' + seconds
    }
  }
}
</script>
<style scoped>
</style>
