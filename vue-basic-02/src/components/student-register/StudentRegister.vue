<template>
  <h1>Student Registration</h1>

  <section class="register-section">
    <div class="form-container">
      <StudentForm @submit="onSubmit" />
    </div>
    <div class="list-container">
      <RegisteredList :students="students" />
    </div>
  </section>
</template>

<script setup lang="ts">
export type Student = {
  name: string
  email: string
  age: number
  gender: 'male' | 'female'
  class: string
}

import StudentForm from './StudentForm.vue'
import RegisteredList from './RegisteredList.vue'
import { ref } from 'vue'

const students = ref<Student[]>([])

function onSubmit(student: Student) {
  students.value.push(student)
}
</script>

<style scoped lang="scss">
.register-section {
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  padding: 1rem;
}

.form-container {
  flex: 1;
  max-width: 400px;
}

.list-container {
  flex: 1;
}
</style>
