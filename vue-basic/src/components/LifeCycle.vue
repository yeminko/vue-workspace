<template>
  <h1>Hello My Name is {{ name }}</h1>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const name = ref('No Name')

onMounted(() => {
  console.log('Component is mounted')
  name.value = 'Vue 3'
})

onUnmounted(() => {
  console.log('Component is unmounted')
  name.value = ''
})
</script>

<style scoped lang="scss"></style>
