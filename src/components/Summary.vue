<template>
  <div class="summary">
    <div class="user-id">{{ userId }}の正解数は</div>
    <div class="nb-correct-answers">
      {{ numOfCorrectAnswers }} / {{ numOfTotalQuestions }}
    </div>
    <div>です</div>
  </div>
</template>

<script>
import store from '../store'
import questions from '../master/questions'

export default {
  name: 'Summary',

  computed: {
    numOfCorrectAnswers: function() {
      return store.correctAnswers().length
    },

    numOfTotalQuestions: function() {
      return questions.numOfTotalQuestions()
    },

    userId: function() {
      return store.userId()
    }
  }
}
</script>

<style scoped>
</style>
