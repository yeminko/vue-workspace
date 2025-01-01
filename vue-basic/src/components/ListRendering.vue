<template>
  <h1>Students</h1>
  <p v-for="student in students" :key="student.id">{{ student.name }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const students = ref([
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
])
</script>

<style scoped lang="scss"></style>
