<template>
  <div class="students-grid">
    <div v-for="student in students" :key="student.email" class="student-card">
      <h3>{{ student.name }}</h3>
      <div class="student-info">
        <p><strong>Email:</strong> {{ student.email }}</p>
        <p><strong>Age:</strong> {{ student.age }}</p>
        <p><strong>Gender:</strong> {{ student.gender }}</p>
        <p><strong>Class:</strong> {{ student.class }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Student } from './StudentRegister.vue'

defineProps<{
  students: Student[]
}>()
</script>

<style scoped lang="scss">
.students-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}

.student-card {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h3 {
    margin: 0 0 1rem 0;
    color: #2c3e50;
  }

  .student-info {
    p {
      margin: 0.5rem 0;
      color: #666;

      strong {
        color: #2c3e50;
      }
    }
  }
}
</style>
