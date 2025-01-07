<template>
  <h1>Welcome, {{ username }}</h1>
  <p>Age: {{ age }}</p>
  <p>Email: {{ email }}</p>

  <button @click="onSubmit">Submit</button>
  <button @click="onCancel">Cancel</button>
  <button @click="onEdit">Edit</button>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const props = defineProps<{
  username: string
  age: number
  email: string
}>()

const emit = defineEmits(['submit', 'cancel', 'edit'])

function onSubmit() {
  const date = new Date()
  emit('submit', date)
}

function onCancel() {
  emit('cancel')
}

function onEdit() {
  emit('edit', 'John is editing')
}

onMounted(() => {
  console.log('Username: ', props.username)
  console.log('Age: ', props.age)
  console.log('Email: ', props.email)
})
</script>

<style scoped lang="scss"></style>
