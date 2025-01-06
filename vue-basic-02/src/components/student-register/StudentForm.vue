<template>
  <form @submit.prevent="onSubmit" class="student-form">
    <div class="form-group">
      <label>Name:</label>
      <input type="text" v-model="name" required />
    </div>

    <div class="form-group">
      <label>Email:</label>
      <input type="email" v-model="email" required />
    </div>

    <div class="form-group">
      <label>Age:</label>
      <input type="number" v-model="age" required min="16" max="60" />
    </div>

    <div class="form-group">
      <label>Gender:</label>
      <div class="radio-group">
        <label>
          <input type="radio" v-model="gender" value="male" required />
          Male
        </label>
        <label>
          <input type="radio" v-model="gender" value="female" />
          Female
        </label>
      </div>
    </div>

    <div class="form-group">
      <label>Select Class:</label>
      <select v-model="selectedClass" required>
        <option value="">Select a class</option>
        <option v-for="course in courses" :key="course" :value="course">
          {{ course }}
        </option>
      </select>
    </div>

    <button type="submit">Submit</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const age = ref<number>()
const gender = ref<'male' | 'female'>()
const selectedClass = ref('')

const courses = [
  'Web Development',
  'JavaScript Advanced',
  'Vue.js Basics',
  'React Fundamentals',
  'Node.js Backend',
  'Python Programming',
  'Database Design',
  'Cloud Computing',
  'Mobile App Development',
  'DevOps Basics',
]

const emit = defineEmits(['submit'])

function onSubmit() {
  emit('submit', {
    name: name.value,
    email: email.value,
    age: age.value,
    gender: gender.value,
    class: selectedClass.value,
  })
  name.value = ''
  email.value = ''
  age.value = undefined
  gender.value = undefined
  selectedClass.value = ''
}
</script>

<style scoped lang="scss">
.student-form {
  background: #f5f5f5;
  padding: 1.5rem;
  border-radius: 8px;

  .form-group {
    margin-bottom: 1rem;

    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: bold;
    }

    input[type='text'],
    input[type='email'],
    input[type='number'],
    select {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
  }

  .radio-group {
    display: flex;
    gap: 1rem;
  }

  button {
    width: 100%;
    padding: 0.75rem;
    background: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background: #45a049;
    }
  }
}
</style>
