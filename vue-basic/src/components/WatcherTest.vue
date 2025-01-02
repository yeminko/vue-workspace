<template>
  <h1>Count: {{ count }}</h1>
  <button @click="count++">Increment</button>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const count = ref(0)

watch(count, (newValue, oldValue) => {
  console.log(`count changed from ${oldValue} to ${newValue}`)
  if (newValue > 10) {
    console.log('count is greater than 10')
    count.value = 0
  }
})

watch(count, () => {
  console.log('count changed')
})
</script>

<style scoped lang="scss"></style>
