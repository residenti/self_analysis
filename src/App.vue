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
/* TODO: 本当はreset.cssとか真面目にやるべき */
#app {
  font-family: 16px/1.6 Helvetica Neue,Helvetica,Arial,sans-serif;
  text-align: center;
  margin: 60px 60px 0;
  color: #333631;
}
.button-group {
  margin: 20px;
}
a {
  text-decoration: none;
  color: #ffffff;
  border-radius: 10%;
  font-size: 1.5em;
  background-color: #de82a7;
  padding: 5px 20px 5px;
}
</style>
