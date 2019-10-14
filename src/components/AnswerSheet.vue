<template>
  <div class="answer-sheet">
    <ul class="option">
      <li
        is="Option"
        v-for="option in showedOptions"
        v-bind:key="option.id"
        v-bind:selectedIdsOfOption="selectedIdsOfOption"
        v-bind:id="option.id"
        v-bind:text="option.text"
        v-on:selected="selectOption"
      />
    </ul>
    <div class="button-group">
      <router-link
        v-bind:to="nextPath"
        class="button"
        v-on:click.native="changeOptions"
      >
        次へ
      </router-link>
    </div>
  </div>
</template>

<script>
import store from '../store'
import Option from './Option'

export default {
  name: 'AnswerSheet',

  data: function() {
    return {
      options: void 0,
      selectedIdsOfOption: []
    }
  },

  components: {
    Option
  },

  computed: {
    showedOptions: function() {
      console.log("computed")
      console.log("this.options", this.options)
      return this.options.filter( option => !option.closed ).slice(0, 6)
    },

    nextPath: function() {
      let showedOptionIds = this.showedOptions.map( option => option.id )
      return showedOptionIds.includes(store.maxIdOfOption()) ? '/summary' : '/answerSheet'
    }
  },

  methods: {
    selectOption: function(id) {
      console.log("before this.selectedIdsOfOption:", this.selectedIdsOfOption)

      let index = this.selectedIdsOfOption.indexOf(id)

      if (index > -1) {
        this.selectedIdsOfOption.splice(index, 1)
      } else {
        this.selectedIdsOfOption.push(id)
      }

      if (this.selectedIdsOfOption.length === 3) { this.selectedIdsOfOption.shift() }

      console.log("after this.selectedIdsOfOption:", this.selectedIdsOfOption)
    },

    changeOptions: function(id) {
      console.log("showedOptions", this.showedOptions)

      this.showedOptions.filter( option => this.selectedIdsOfOption.includes(option.id) )
        .forEach( option => store.incrementCountOfOption(option.id) )

      this.showedOptions.filter( option => !this.selectedIdsOfOption.includes(option.id) )
        .forEach( option => store.closeOption(option.id) )
    }
  },

  created: function () {
    console.log("created")
    this.options = store.options()
    console.log("this.options", this.options)
  }
}
</script>

<style scoped>
</style>
