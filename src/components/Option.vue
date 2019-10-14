<template>
  <li class="option">
    <label>
      <input
        type="checkbox"
        name="option"
        v-bind:value="id"
        v-bind:disabled="disable"
        v-on:change="onSelected"
      >{{ text }}
    </label>
  </li>
</template>

<script>
export default {
  name: 'Option',

  props: [
    'id',
    'text',
    'selectedIdsOfOption'
  ],

  computed: {
    disable: function() {
      return this.selectedIdsOfOption.length >= 2 && !this.selectedIdsOfOption.includes(this.id)
    }
  },

  methods: {
    onSelected: function() {
      console.log("this.id", this.id)
      this.$emit('selected', this.id)
    }
  }
}
</script>

<style scoped>
</style>
