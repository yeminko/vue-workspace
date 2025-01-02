<template>
  <h1>Hello My Name is {{ name }}</h1>
  <button @click="name = 'Vue 3'">Change Name</button>
</template>

<script setup lang="ts">
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onErrorCaptured,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from 'vue'

const name = ref('No Name')

onBeforeMount(() => {
  console.log('Component is about to mount')
})

onMounted(() => {
  console.log('Component is mounted')
})

onBeforeUpdate(() => {
  console.log('Component is about to update')
})

onUpdated(() => {
  console.log('Component is updated')
})

onBeforeUnmount(() => {
  console.log('Component is about to unmount')
})

onUnmounted(() => {
  console.log('Component is unmounted')
  name.value = ''
})

onErrorCaptured((error) => {
  console.log('Error captured in component', error)
})
</script>

<style scoped lang="scss"></style>
