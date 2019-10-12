<template>
  <div id="app">
    <!-- メインのvue component -->
    <!--
        今回はvueの単一ファイルコンポーネントの機能を利用しているので
        一つのファイル内にtmlとjsとcssを記載する
    -->
   <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
