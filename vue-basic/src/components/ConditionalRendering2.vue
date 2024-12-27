<template>
  <section>
    <h1>Exam Result</h1>
    <input type="number" placeholder="Enter your score" v-model="score" />
    <h2>Result</h2>
    <div v-if="score !== ''">
      <p v-if="+score >= 90">Distinction</p>
      <p v-else-if="+score >= 75">Merit</p>
      <p v-else-if="+score >= 50">Pass</p>
      <p v-else>Fail</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const score = ref<string>('')
</script>

<style scoped lang="scss"></style>
