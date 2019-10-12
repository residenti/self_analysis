<template>
  <li class="answer-candidate">
    <label>
      <input
        type="radio"
        name="answer"
        v-bind:value="idx"
        v-on:change="onSelected"
      >{{ text }}
    </label>
  </li>
</template>

<script>
export default {
  name: 'AnswerCandidate',

  props: ['idx', 'text'],

  methods: {
    onSelected: function() {
      this.$emit('selected', this.idx)
    }
  }
}
</script>

<style scoped>
</style>
