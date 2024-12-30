<template>
  <p v-for="fruit in fruits" :key="fruit">{{ fruit }}</p>

  <br />
  <br />

  <p v-for="student in students" :key="student.id">Student Name: {{ student.name }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const fruits = ref(['apple', 'banana', 'cherry'])

const students = ref([
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
])
</script>

<style scoped lang="scss"></style>
