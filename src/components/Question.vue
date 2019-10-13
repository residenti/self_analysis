<template>
  <div class="question">
    question {{ id }}
    <div class="text">
      {{ question.text }}
    </div>
    <ul class="answer-candidates">
      <li
        is="AnswerCandidate"
        v-for="candidate in question.answerCandidates"
        v-bind:key="candidate.idx"
        v-bind:idx="candidate.idx"
        v-bind:text="candidate.text"
        v-on:selected="selectAnswerCandidate"
      />
    </ul>
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
import store from '../store'
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
  },
  methods: {
    selectAnswerCandidate: function(answerIdx) {
      store.saveAnswer(this.id, answerIdx)
    }
  }
}
</script>

<style scoped>
</style>
