<template>
  <div class="question">
    question {{ id }}
    <div class="text">
      {{ question.text }}
    </div>
    <select class="answer-candidates">
      <option
        is="AnswerCandidate"
        v-for="candidate in question.answerCandidates"
        v-bind:key="candidate.idx"
        v-bind:text="candidate.text"
      />
    </select>
    <div class="button-group">
      <router-link
        v-bind:to="nextPath"
        class="button"
      >
        次へ
      </router-link>
    </div>
  </div>
</template>

<script>
import questions from '../master/questions'
import AnswerCandidate from './AnswerCandidate'

export default {
  name: 'Question',

  props: ['id'],

  components: {
    AnswerCandidate
  },

  computed: {
    question: function() {
      return questions.find(this.id)
    },

    nextPath: function() {
      const nextId = questions.next(this.id)
      return nextId ? `/question/${nextId}` : '/summary'
    }
  }
}
</script>

<style scoped>
</style>
