<template>
  <div class="top">
    <h1>フルーツバスケットクイズ</h1>
    <label>No. 記入欄
      <input type="text" />
    </label>
    <div class="button-group">
      <router-link
        to="/question/1"
        class="button"
      >
        始める
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Top',
}
</script>

<style scoped>
</style>
