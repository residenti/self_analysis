<template>
  <div class="question">
    question {{ id }}
    <div class="text">
      {{ question.text }}
    </div>
  </div>
</template>

<script>
import questions from '../master/questions'

export default {
  name: 'Question',
  props: ['id'],
  computed: {
    question: function() {
      return questions.find(this.id)
    }
  }
}
</script>

<style scoped>
</style>
